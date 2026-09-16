{
    # Flake inputs
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs?ref=e9188e0072f22982a93bbdb2c69975b18a3c5cdb";
        flake-utils.url = "github:numtide/flake-utils?ref=11707dc2f618dd54ca8739b309ec4fc024de578b";
    };

    # Flake outputs
    # Development environment output
    outputs =
        { nixpkgs, flake-utils, ... }:
        flake-utils.lib.eachDefaultSystem (
            system:
            let
                pkgs = import nixpkgs { inherit system; };

                buildPackages = with pkgs; [ zola ];

                devPackages = with pkgs; [
                    twig-language-server
                    ludtwig
                ];
            in
            {
                devShells.default = pkgs.mkShell { packages = buildPackages ++ devPackages; };

                packages.default = pkgs.stdenv.mkDerivation {
                    pname = "cogsandsquigs-dev-website";
                    version = "0.1.0";
                    src = ./.;
                    nativeBuildInputs = buildPackages;
                    buildPhase = "zola build -o $out";
                    dontInstall = true;
                };
            }
        );
}
