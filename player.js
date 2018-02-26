const KEYS = {
  SPACE: 32,
  ENTER: 13,
}

var player= {
  width: 20,
  height: 40,
  y: 270,
  y_velocity: 0,
  x: 180,
  jumpForce: 20,
  isJumping: false,
  gravity: 1.5,
  pressedKeys: [],
  KEY: KEYS
}



function movePlayer () {

    if (player.pressedKeys[player.KEY.SPACE] && player.isJumping == false) {
      player.y_velocity -= player.jumpForce;
      player.isJumping = true;
      jumpSound.play();
    }


    player.y_velocity += player.gravity;
    player.y += player.y_velocity;
    player.y_velocity *= 0.9;

    if (player.y >  270) {
      player.y = 270;
      player.y_velocity = 0;
      player.isJumping = false;
    }

    $("#player").css ({
      "top": player.y  + "px",
    })

}
