{
    # Flake inputs
    inputs = {
        nixpkgs.url = "github:NixOS/nixpkgs"; # Latest stable Nixpkgs
        flake-utils.url = "github:numtide/flake-utils";
    };

    # Flake outputs
    # Development environment output
    outputs = {
        nixpkgs,
        flake-utils,
        ...
    }:
        flake-utils.lib.eachDefaultSystem (system: let
            pkgs = import nixpkgs {inherit system;};
        in {
            devShells.default = pkgs.mkShell {
                packages = with pkgs; [
                    bun
                    zola
                ];
            };
        });
}
