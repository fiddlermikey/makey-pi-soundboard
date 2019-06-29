# makey-pi-soundboard
MakeyMakey+RaspberryPi Customizable Soundboard

This simple node app waits for keypresses and plays sounds. It is intended to be used with the MakeyMakey board which simulates keyboard inputs. 

Written and tested on Pi 3B

You will need to install the following modules
- play-sound
- keypress
- fs

This is probably not the cleanest implementation and sound issues are present. Feel free to suggest updates to my code and let me know if you use this in a project somewhere.

If you are planning to run this headless (*with or without* network access), be sure to run raspi-conifig to configure autologin and add the node app to your startup file. (On Raspian Stretch, .profile)
