let jumpSound = new Sound("./jump.mp3", false);
let dieSound = new Sound("./die.mp3", true);

let playDieSound = false;

function Sound(src, isDieSound) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function(){
        if (!isDieSound) {
          this.sound.play();
        }else {
          if (!playDieSound) {
            this.sound.play();
            setTimeout(this.die, 1000);
          }
        }
    }

    this.die = function() {
      playDieSound = true;
    }
}
