# Cogs (S)CSS Framework

This is a (S)CSS framework, built to be customizable while maintaining the ability to be modified by
the maintainer (myself!)

## The entrypoint

Everything is entered into `main.scss`. When compiled into CSS, this becomes `main.css`. This is
tweakable via CSS variables.

## Theme and Design

Theme and design are set in `_theme.scss`. This is itself controlled by a set of CSS variables,
which are transparently referenced by the Sass variables. Thus, importing `_theme.scss` gives full
access to easy-to-use Sass variables, while maintaining tweakability within CSS.
