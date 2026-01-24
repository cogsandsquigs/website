{
    # Flake inputs
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs?ref=cf2f56f17dba3f894f754739c36c8465a40ba513";
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
                devShells.default = pkgs.mkShell { packages = with pkgs; [ zola ]; };
            }
        );
}
