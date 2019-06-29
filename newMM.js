var player = require('play-sound')(opts = {})
var keypress = require("keypress");
keypress(process.stdin);
var fs = require('fs');
var soundBank = [];
var bankNum = 0;
var soundDir = "";
var soundDirs = ["Woosh", "Alert","Input","SciFi"];

// nextSoundBank()
// funtion to load the array. This gets called at start and "space"
var nextSoundBank = () => {
  soundDir = "./sounds/" + soundDirs[bankNum % soundDirs.length] + "/";
  bankNum ++;
  console.log(soundDir);
  return soundDir;

}
nextSoundBank();
var getSoundArray = () => {
  var arrayOfFiles = fs.readdirSync(soundDir);
  soundBank = [];
  arrayOfFiles.forEach( function (file) {
      soundBank.push(file);
  });
}



// Play the sound files

var addSound = (sNum) => {
  // setup the sound bank and get the array of sounds
  getSoundArray();
  var sFile = soundDir + "/" + soundBank[sNum];
  player.play(sFile);
}
// Give us a signal it is ready to go
player.play('./sounds/Input//Input-01.mp3');
// Sense the key being pressed
process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdin.setRawMode(true);

process.stdin.on("keypress", function(ch, key) {

  if (!key) {
    return;
  }

  if (key.name === "q") {
    process.exit();
  } else if (key.name === "a") {
   addSound(0);
  } else if (key.name === "w") {
   addSound(1);
 } else if (key.name === "s") {
   addSound(2);
 } else if (key.name === "d") {
   addSound(3);
 } else if (key.name === "g") {
   addSound(4);
 } else if (key.name === "f") {
   addSound(5);
 } else if (key.name === "space") {
    nextSoundBank(0);
 } else if (key.name === "j") {
    nextSoundBank();
 }
});
