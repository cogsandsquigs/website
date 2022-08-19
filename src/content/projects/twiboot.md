---
title: twiboot
date: 2022-08-04
description: Twiboot is a Particle library that allows for interfacing with the Twiboot bootloader.
tags:
    - particle-iot
    - twiboot
    - atmega
    - bootloader
    - loop-tracks
    - project
draft: false
---

Twiboot is a Particle library that allows for interfacing with the Twiboot bootloader.
It's a simple library that allows for the flashing of a new firmware to a Twiboot-enabled device.
This library was created specifically for the Loop Tracks project.

Example diagram of how an interaction between a Particle Argon and an ATmega chip w/ twiboot would go:

```mermaid
sequenceDiagram
Argon->m328p: SLA+W 0x00 STO (Stop program startup)
m328p-> Argon: ACK

loop Flashing pages of progam to the ATmega
    Argon->m328p: SLA+W 0x02 0x01 <addr high> <addr low> <128 bytes to flash...> STO (flash bytes to page)
    m328p->Argon: ACK
end

loop Gathering pages of data to verify w/ CRC32
    Argon->m328p: SLA+W 0x02 0x01 <addr high> <addr low> (where to read flash)
    m328p->Argon: ACK
    Argon->m328p: SLA+R 128 STO (Read page bytes)
    m328p->Argon: ACK
    m328p->Argon: <page bytes...>
    Argon->m328p: ACK
end

note over Argon: Verifies data w/ CRC32

Argon->m328p: SLA+W 0x01 0x80 STO (Start the main app)
m328p->Argon: ACK

note over m328p: Starts the main app.
```

## Installation:

Make sure that your MCU of choice has twiboot installed. A makefile is included here, however, this is mainly for my own purposes (for custom-building twiboot) and is not recommended for use outside of the loop-tracks project. It is recommended to use the makefile in the twiboot subfolder (it's a gitmodule of twiboot).
