---
draft: true
title: Flash Portenta H7 with Nucleo on-board STLink
date: 2023-06-14T05:00:00.000Z
tags:
  - dev
  - iot
  - portenta-h7
---

This post comes from an issue I had at work, that I spent hours trying to debug and fix. Now, you can avoid my terrible fate!

Sometimes, after messing around with things for a while, you’ll cause your Arduino Portenta H7 to brick itself by scrambling the bootloader. This leads to:

* The leftmost orange LED staying on permanently, or with occasional flickering.
* The Portenta no longer responds over USB, and thus cannot be programmed the usual way.

To fix this issue, you’ll need to flash the Portenta’s bootloader with an external JTAG/SWD debugger of your choice. In my case, I had an STLink-V3PWR to flash with, but that kept failing for some unknown reason. So, I decided to use a Nucleo-64 on-board STLink-V2 debugger to flash. This is how I did it.

## Materials

* 1 [Portenta H7](https://store-usa.arduino.cc/products/portenta-h7) board, bricked or otherwise.
* 1 [Portenta Breakout](https://store-usa.arduino.cc/products/arduino-portenta-breakout) board.
* 1 [Nucleo](https://www.st.com/en/evaluation-tools/nucleo-f072rb.html) board with built-in STLink debugger. I used a Nucleo-F072RB, but other similar boards may work. The documentation for Nucleo-F072RB boards is [here](https://www.st.com/resource/en/user_manual/um1724-stm32-nucleo64-boards-mb1136-stmicroelectronics.pdf), and a list of documentation for all boards is [here](https://www.st.com/en/evaluation-tools/stm32-nucleo-boards/documentation.html).
* 5 strands of thin wire that can wrap around the JTAG pins on the Portenta breakout. I used [Saleae Test Leads](https://usd.saleae.com/collections/accessories/products/wire-harness-94) with their [Saleae Test Clips](https://usd.saleae.com/collections/accessories/products/test-clips-93).
* 1 USB-C cable (for the portenta).
* 1 Mini-USB cable (for the Nucleo).

## Procedure

1. Connect the Portenta to the Portenta breakout board. If desired, break off the Nucleo debugger (it is the smaller portion attached by 3 bridges to the main board).
2. Remove the **CN2** jumpers off of the Nucleo debugger. This section may change, so refer to your board’s documentation on using the on-board debugger to debug external chips.
3. Connect jumper wires to the **SWD** section (also labeled **CM4**) of the Nucleo debugger. Refer to your board’s documentation for more information on where to place these. A picture of the wires are shown below.

   ![IMG\_6751.jpeg](Flash%20Portenta%20H7%20with%20Nucleo%20on-board%20STLink%20dc469285d5334f33860a2613732f3803/IMG_6751.jpeg)
4. Connect the Nucleo debugger to the Portenta. This step is non-trivial, so pay attention! The diagrams below show the respective pinouts of important areas for the two boards.

   Nucleo debugger:

   ![Screenshot 2023-06-13 at 1.44.53 PM.png](Flash%20Portenta%20H7%20with%20Nucleo%20on-board%20STLink%20dc469285d5334f33860a2613732f3803/Screenshot_2023-06-13_at_1.44.53_PM.png)

   Portenta breakout JTAG connector:

   ![Untitled](Flash%20Portenta%20H7%20with%20Nucleo%20on-board%20STLink%20dc469285d5334f33860a2613732f3803/Untitled.png)

   In the following order, use the 5 wires to connect these 5 pins from the Nucleo debugger to the Portenta JTAG pins:
   * **VDD\_TARGET** (pin 1) to **+3V3** (pin 1)
   * **SWCLK** (pin 2) to **TCK/SWCLK** (pin 4)
   * **GND** (pin 3) to **GND** (pin 3, 5, or 9)
   * **SWDIO** (pin 4) to **TMS/SWDIO** (pin 2)
   * **NRST** (pin 5) to **RESET** (pin 10)
     A picture of the setup is shown below:
     ![IMG\_6749.jpeg](Flash%20Portenta%20H7%20with%20Nucleo%20on-board%20STLink%20dc469285d5334f33860a2613732f3803/IMG_6749.jpeg)
5. Connect **both** the Nucleo debugger and the Portenta to power. Make sure that each cable can transfer data to and from their respective ports.
6. In the Arduino IDE, go to **Tools > Port** and set the port to the Nucleo debugger (it should show up as a long string of numbers). Go to **Tools > Programmer** and set it to **STMicroelectronics STLINK**. Make sure that the board type is set to **Portenta H7**.
7. Go to **Tools > Burn bootloader**. The bootloader should now be burned onto the Portenta!

And now, the issue should be resolved. The orange LED should no longer stay on permanently, and you can now flash any program you like onto the Portenta.
