{
    # Flake inputs
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
        flake-utils.url = "github:numtide/flake-utils";
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
