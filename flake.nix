{
    # Flake inputs
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";
        multiverse.url = "github:fzakaria/nixpkgs-multiverse";
        flake-utils.url = "github:numtide/flake-utils";
    };

    # Flake outputs
    # Development environment output
    outputs =
        {
            nixpkgs,
            flake-utils,
            multiverse,
            ...
        }:
        flake-utils.lib.eachDefaultSystem (
            system:
            let
                pkgs = import nixpkgs { inherit system; };
                mv = multiverse.multiverse.${system};

                buildPackages = [ (mv.version "zola" "0.23.6") ];

                devPackages = [
                    mv.latest.twig-language-server
                    mv.latest.ludtwig
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
