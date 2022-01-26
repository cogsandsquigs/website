{ pkgs ? import <nixpkgs> {} }:
 
pkgs.mkShell {
  name = "node-env";
  buildInputs = [
    pkgs.nodejs
  ];
}