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
            in
            {
                devShells.default = pkgs.mkShell {
                    packages = with pkgs; [
                        zola # SSG
                        twig-language-server # LSP for templates
                        ludtwig # Formatter for templates
                    ];
                };
            }
        );
}
