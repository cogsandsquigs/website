{ pkgs ? import <nixpkgs> {} }:
 
pkgs.mkShell {
  name = "node-env";
  buildInputs = [
    pkgs.nodejs-16_x
  ];
}