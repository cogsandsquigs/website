{
  description = "Website Build";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11"; # Latest stable
    flake-utils.url = "github:numtide/flake-utils"; # Easy config for every system
  };

  outputs = {
    nixpkgs,
    flake-utils,
    ...
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        formatter = pkgs.nixpkgs-fmt;

        # The devShell is a shell that contains all the dependencies available during development.
        # Essentially, all the things we have access to during build/compile/whatever.
        devShell = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [
            nodejs-22_x
            bun
          ];
        };
      }
    );
}
