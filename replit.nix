/*
{ pkgs ? import <nixpkgs> {} }:
 
pkgs.mkShell {
  name = "node-env";
  buildInputs = [
    pkgs.nodejs-17_x
  ];
}
*/

{ pkgs }: {
  deps = [
    pkgs.nodejs-17_x
  ]
}