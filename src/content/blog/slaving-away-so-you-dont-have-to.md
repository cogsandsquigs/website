---
title: Slaving away so you don’t have to
date: 2022-08-05
description: My journey creating cogsandsquigs/twiboot
draft: false
tags:
    - atmega
    - bootloader
    - dev
    - particle-iot
    - twiboot
---

Sooo… where was I?

Mostly just doing my own thing, building stuff, breaking stuff, etc., etc. Living the dream, as some might say.

Part of what I was doing was taking the long, winding road to creating [cogsandsquigs/twiboot](https://cogsandsquigs/twiboot) (not to be confused with [orempel/twiboot](https://github.com/orempel/twiboot), but that’ll be explained later). How I got here was long, tiring, and frankly too exhausting. So that’s where two (of the many previous) weeks of my life went!

Flashback to 2 weeks prior: I was sitting around, minding my own buisness, when my boss and I were having a discussion about what to do about our problem: The chips we were using for our internal project didn’t support OTA updates. They’re just tiny little ATmega328s, which we could possibly ship with buggy or outright broken code! Fortunately, these guys were controlled by a Particle Argon, which could connect to WiFi and _did_ support OTA updates.

The question was, how do we get the ATmegas to be updated by the Argon? The answer was a **bootloader**, of course! A custom bootloader which could be controlled (for a split second) by the Argon, which could send it new firmware through a communication protocol (I2C/TWI was the one we were gonna use), and bam! updates! How hard could it be? Not worse than coding in C for the Argon and Arduino Uno (basically an ATmega + nice libraries + nice hardware), right?

As it turns out, it was awfully hard. Like, really, really, really hard. Low level programming with C is not for everyone (and definitely not for me!). Because I don’t want to provide too much detail, being a lazy blogger, here’s a step-by-step of what happened:

1.  Research.
2.  Start with low-level programming.
3.  Get a simple blink example to work on an ATmega328.
4.  Great, that works! Try doing stuff over UART/Serial.
5.  Very difficult, but manageable. Try I2C/TWI now?.
6.  Wow, that was awful, and it doesn’t work!.
7.  Repeat steps 1-6 a few more times.
8.  Stumble across [orempel/twiboot](https://github.com/orempel/twiboot).
9.  Try to get that to work.
10. Suprise! It doesn't :(.
11. Repeat steps 1-6.
12. Try to make just a bootloader, see if that can work.
13. It works, just not for what we need.
14. Repeat steps 1-6.
15. Try twiboot in desperation again.
16. Suprise! It works now. (I needed to send 128 bytes of flash per page at a time, nothing more or less. Silly me, just read the docs!)
17. Make a particle library for it.
18. Done! Eazy-peezy lemon-squeezy.

Yeah... those were an awful two weeks. But I’m done now, and you can find the library at the link above. Don’t confuse it for orempel’s library, though. That’s the _actual_ bootloader.

So if you’re ever in my position, and need something to help you, maybe my work can make your life easier. Maybe. Or it could make it hell, I dunno how many bugs are in there (but I tried to squash them all, don’t worry).

That’s all for now.

See ya!
