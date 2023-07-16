---
draft: true
title: (Actually) Binding Rust to Swift
description: >-
  Because no-one else thoroughly tells you how to package Swift (not even the
  docs)
date: 2023-07-16T05:00:00.000Z
tags:
  - macos
  - ios
  - xcode
  - ffi
  - bindings
  - uniffi
  - swift
  - rust
---

So, about Rust.

It's great and all, but unfortunately, not *every* company supports using Rust directly on their platform (boo! boo Apple!). In my case, it's (surprise, surprise) Apple that doesn't support Rust instead of Swift. *However*, other people have had this problem in the past, and they've created solutions to work around this.

Why am I writing about binding Swift to Rust in the first place? Because for my work, I needed to create an [assembler for a custom CPU](https://github.com/cogsandsquigs/nand7400) (called `nand7400`) that's programmed via an iOS/MacOS app. Besides, bindings are a (theoretically) fun adventure into more low-level concepts, something I wanted to (quote-unquote) enjoy more often.

My poison of choice for this project is [UniFFI](https://mozilla.github.io/uniffi-rs/). This library allows Swift to bind and call to Rust, without much hassle (remember the "much"). You should go read the docs, but in essence:

1. [Define a .udl file](https://mozilla.github.io/uniffi-rs/tutorial/udl_file.html) which [specifies](https://mozilla.github.io/uniffi-rs/udl_file_spec.html) the exposed APIs.
2. Include some [magic mumbo jumbo](https://mozilla.github.io/uniffi-rs/tutorial/Rust_scaffolding.html) in your library to expose the symbols (This step is VERY important! It won't generate any warnings if it's skipped, but doing so will lead to undefined symbol errors down the line in Xcode or whatever).
3. [Create and export code](https://mozilla.github.io/uniffi-rs/tutorial/foreign_language_bindings.html) in your language of choice via an [associated binary](https://mozilla.github.io/uniffi-rs/tutorial/foreign_language_bindings.html#creating-the-bindgen-binary). You can also use [custom back-ends](https://github.com/mozilla/uniffi-rs/#third-party-foreign-language-bindings) for unofficially supported languages!

That's it! The documentation pretty much ends there, and expects you to package everything nice and neat like the good little developer you are. Funnily enough, there's not a lot of documentation online on how to do this, even on Apple's part. Fortunately, some guy has a [guide](https://rhonabwy.com/2023/02/10/creating-an-xcframework/) on how to package Rust applications into an `XCFramework`, which is a special type of binary that can be used on Apple platforms. There's also a [rust library](https://github.com/y-crdt/yswift) that demonstrates compiling to an `XCFramework`, which that guy worked on!

To get everything up and running, follow [that guide](https://rhonabwy.com/2023/02/10/creating-an-xcframework/) to set up your dev environment for creating an `XCFramework`. You can use [my own makefile](https://github.com/cogsandsquigs/nand7400/blob/main/Makefile) to set up and compile everything, too, which is shown below. In my case, I have the main Rust library in `nand7400`, the Swift-binding Rust scaffolding code in `nand7400-ffi`, and export the Swift code to `nand7400-ffi-bindings/swift` (I used the YSwift repository's [build script](https://github.com/y-crdt/yswift/blob/main/scripts/build-xcframework.sh) to start this `Makefile`, then tweaked it to my liking and specific setup).

```make
# This makefile is used to build the Nand7400 framework for iOS, macOS and Mac Catalyst. To use it, run `make package` in 
# the root of the repository.

# Rust-specific configuration
PACKAGE_NAME=nand7400-ffi
LIB_NAME=libnand7400_ffi.a
CARGO_FLAGS= --package ${PACKAGE_NAME} --lib --locked --release

# General binding configuration
UNIFFI_CMD=cargo run -p nand7400-ffi --features=cli --bin uniffi --
UNIFFI_UDL_FILE=src/ffi.udl

# General build configuration
BUILD_FOLDER=target
ARTIFACTS_FOLDER=target/uniffi-artifacts
BINDINGS_FOLDER=nand7400-ffi-bindings

# Testing/fuzzing stuff
FUZZ_TARGET=nand7400-fuzz
# Additional flags for AFL besides the input, output and target binary
AFL_FLAGS=-d -D

# Swift-specific stuff
FRAMEWORK_NAME=Nand7400FFI
XCFRAMEWORK_FOLDER=target/${FRAMEWORK_NAME}.xcframework

# Install all the necessary build targets to build for Mac, iOS and Mac Catalyst.
setup-build:
	@echo "▸ Installing toolchains..."
# 	iOS Simulator (Intel)
	@rustup target add x86_64-apple-ios
#	iOS Simulator (M1)
	@rustup target add aarch64-apple-ios-sim
#	iOS Device 
	@rustup target add aarch64-apple-ios
#	macOS ARM/M1
	@rustup target add aarch64-apple-darwin
#	macOS Intel/x86 
	@rustup target add x86_64-apple-darwin

clean:
	@echo ▸ Cleaning build...
	@rm -rf ${ARTIFACTS_FOLDER}
	@rm -rf ${XCFRAMEWORK_FOLDER}
	@rm -rf ${BINDINGS_FOLDER}
	@mkdir -p ${ARTIFACTS_FOLDER}
	@mkdir -p ${BINDINGS_FOLDER}

bind: setup-build clean
	@echo "▸ Generating Swift scaffolding code..."
	${UNIFFI_CMD} generate ${PACKAGE_NAME}/${UNIFFI_UDL_FILE} --language swift --out-dir ${BINDINGS_FOLDER}/swift

build-swift: bind
	@echo "▸ Building for x86_64-apple-ios..."
	@CFLAGS_x86_64_apple_ios="-target x86_64-apple-ios" \
	cargo build --target x86_64-apple-ios ${CARGO_FLAGS}

	@echo "▸ Building for aarch64-apple-ios-sim..."
	@CFLAGS_aarch64_apple_ios="-target aarch64-apple-ios-sim" \
	cargo build --target aarch64-apple-ios-sim ${CARGO_FLAGS}

	@echo "▸ Building for aarch64-apple-ios..."
	@CFLAGS_aarch64_apple_ios="-target aarch64-apple-ios" \
	cargo build --target aarch64-apple-ios ${CARGO_FLAGS}

	@echo "▸ Building for aarch64-apple-darwin..."
	@CFLAGS_aarch64_apple_darwin="-target aarch64-apple-darwin" \
	cargo build --target aarch64-apple-darwin ${CARGO_FLAGS}

	@echo "▸ Building for x86_64-apple-darwin..."
	@CFLAGS_x86_64_apple_darwin="-target x86_64-apple-darwin" \
	cargo build --target x86_64-apple-darwin ${CARGO_FLAGS}

	@echo "▸ Building for x86_64-apple-ios-macabi..."
	@CFLAGS_x86_64_apple_ios="-target x86_64-apple-ios-macabi" \
	cargo +nightly build -Z build-std --target x86_64-apple-ios-macabi ${CARGO_FLAGS}

	@echo "▸ Building for aarch64-apple-ios-macabi..."
	@CFLAGS_aarch64_apple_ios="-target aarch64-apple-ios-macabi" \
	cargo +nightly build -Z build-std --target aarch64-apple-ios-macabi ${CARGO_FLAGS}

	@echo "▸ Consolidating the headers and modulemaps for XCFramework generation..."
	@mkdir -p ${ARTIFACTS_FOLDER}/includes
	@cp ${BINDINGS_FOLDER}/swift/${FRAMEWORK_NAME}.h ${ARTIFACTS_FOLDER}/includes
	@cp ${BINDINGS_FOLDER}/swift/${FRAMEWORK_NAME}.modulemap ${ARTIFACTS_FOLDER}/includes/module.modulemap
	
	@echo "▸ Merging x86 and arm iOS simulator static libraries into a fat static binary..."
	@mkdir -p ${ARTIFACTS_FOLDER}/ios-simulator/release
	@lipo -create \
		./${BUILD_FOLDER}/x86_64-apple-ios/release/${LIB_NAME} \
		./${BUILD_FOLDER}/aarch64-apple-ios-sim/release/${LIB_NAME} \
		-output ${ARTIFACTS_FOLDER}/ios-simulator/release/${LIB_NAME}

	@echo "▸ Merging x86 and arm macOS static libraries into a fat static binary..."
	@mkdir -p ${ARTIFACTS_FOLDER}/apple-darwin/release
	@lipo -create \
		./${BUILD_FOLDER}/x86_64-apple-darwin/release/${LIB_NAME} \
		./${BUILD_FOLDER}/aarch64-apple-darwin/release/${LIB_NAME} \
		-output ${ARTIFACTS_FOLDER}/apple-darwin/release/${LIB_NAME}

	@echo "▸ Merging x86 and arm macOS Catalyst static libraries into a fat static binary..."
	@mkdir -p ${ARTIFACTS_FOLDER}/mac-catalyst/release
	@lipo -create \
		./${BUILD_FOLDER}/x86_64-apple-ios-macabi/release/${LIB_NAME} \
		./${BUILD_FOLDER}/aarch64-apple-ios-macabi/release/${LIB_NAME} \
		-output ${ARTIFACTS_FOLDER}/mac-catalyst/release/${LIB_NAME}


package-swift: build-swift
	@echo "▸ Creating XCFramework..."
#	what docs there are:
#	xcodebuild -create-xcframework -help
#	https://developer.apple.com/documentation/xcode/creating-a-multi-platform-binary-framework-bundle
	@BUILD_LIBRARY_FOR_DISTRIBUTION=YES \
	xcodebuild -create-xcframework \
		-library ./${BUILD_FOLDER}/aarch64-apple-ios/release/${LIB_NAME} \
		-headers ./${ARTIFACTS_FOLDER}/includes \
		-library ./${ARTIFACTS_FOLDER}/ios-simulator/release/${LIB_NAME} \
		-headers ./${ARTIFACTS_FOLDER}/includes \
		-library ./${ARTIFACTS_FOLDER}/apple-darwin/release/${LIB_NAME} \
		-headers ./${ARTIFACTS_FOLDER}/includes \
		-library ./${ARTIFACTS_FOLDER}/mac-catalyst/release/${LIB_NAME} \
		-headers ./${ARTIFACTS_FOLDER}/includes \
		-output ./${XCFRAMEWORK_FOLDER}

#	Move modulemaps to the right place, so that the XCFramework can be used directly in Swift Package Manager
	@mkdir -p ${XCFRAMEWORK_FOLDER}/ios-arm64/Modules
	@mkdir -p ${XCFRAMEWORK_FOLDER}/ios-x86_64-simulator/Modules
	@mkdir -p ${XCFRAMEWORK_FOLDER}/ios-arm64_x86_64-simulator/Modules
	@mkdir -p ${XCFRAMEWORK_FOLDER}/ios-arm64_x86_64-maccatalyst/Modules
	@mkdir -p ${XCFRAMEWORK_FOLDER}/macos-arm64_x86_64/Modules
	@cp ${BINDINGS_FOLDER}/swift/${FRAMEWORK_NAME}.modulemap ${XCFRAMEWORK_FOLDER}/ios-arm64/Modules/module.modulemap
	@cp ${BINDINGS_FOLDER}/swift/${FRAMEWORK_NAME}.modulemap ${XCFRAMEWORK_FOLDER}/ios-x86_64-simulator/Modules/module.modulemap
	@cp ${BINDINGS_FOLDER}/swift/${FRAMEWORK_NAME}.modulemap ${XCFRAMEWORK_FOLDER}/ios-arm64_x86_64-simulator/Modules/module.modulemap
	@cp ${BINDINGS_FOLDER}/swift/${FRAMEWORK_NAME}.modulemap ${XCFRAMEWORK_FOLDER}/ios-arm64_x86_64-maccatalyst/Modules/module.modulemap
	@cp ${BINDINGS_FOLDER}/swift/${FRAMEWORK_NAME}.modulemap ${XCFRAMEWORK_FOLDER}/macos-arm64_x86_64/Modules/module.modulemap

	@echo "▸ Compressing XCFramework..."
	@ditto -c -k --sequesterRsrc --keepParent ${XCFRAMEWORK_FOLDER} ${XCFRAMEWORK_FOLDER}.zip

	@echo "▸ Computing checksum..."
	@swift package compute-checksum ${XCFRAMEWORK_FOLDER}.zip > ${XCFRAMEWORK_FOLDER}.zip.sha256

	@echo "▸ Finished Swift bindings!"

# Convenience target to build and package everything
package: package-swift
	@echo "▸ Done!"
```

We're not done, however. We also need to define a `Package.swift` that tells Xcode how to install the swift binary. This is mostly also copied from the above repo, and is shown below:

```swift
// swift-tools-version:5.8

import Foundation
import PackageDescription

let FFIbinaryTarget: PackageDescription.Target

let package = Package(
	name: "Nand7400",
	platforms: [.iOS(.v13), .macOS(.v10_15)],
	products: [
		.library(
			name: "Nand7400",
			targets: ["Nand7400"]
		),
	],
	dependencies: [],
	targets: [
		.target(
			name: "Nand7400",
			dependencies: ["Nand7400FFI"],
			path: "nand7400-ffi-bindings/swift"
		),
		.binaryTarget(
			name: "Nand7400FFI",
			url: "https://github.com/cogsandsquigs/nand7400/releases/download/v0.3.1/Nand7400FFI.xcframework.zip",
			checksum: "3bcdfb390e55cd7f940a5fabb1944f8bb2fbf85791a3b8c55fbd1492d1c18428"
		),
	]
)
```

We define a `.target` to export to, and also a `.binaryTarget` which the `.target` depends on (that's where the bindings live). I also specify a path to the swift bindings in `.target`, because the default is `Sources`.

Once everything's done and set up, you should be good to go! If you're running my makefile, run `make package` to package everything up into an `XCFramework`, then export that somewhere and put the link (as well as the `sha256`) in the `Package.swift` file.

Happy binding!
