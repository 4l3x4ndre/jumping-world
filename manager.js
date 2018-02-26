obsM = new ObstaclesManager();
obsM.createImg();
nuaM = new NuagesManager;
nuaM.createImg();

playerDead = false;

score = 0;
instanceBallScore = 3;
minInstance = 2;
maxInstance = 3;
timeBetweenObs = 2000;

playerDieSound = false;

var gameLoop = setInterval(function() {

  $(document).keydown(function(e) {
        player.pressedKeys[e.which] = true;
    });
    $(document).keyup(function(e) {
        player.pressedKeys[e.which] = false;
    });


    if (!playerDead) {
      movePlayer();
      obsM.moveObstacles();
      nuaM.moveNuages();

      document.getElementById("panel").style.display = "none";
    }else {
      document.getElementById("GameOver").style.display = "block";
      document.getElementById("panel").style.display = "block";
      dieSound.play();
      if (player.pressedKeys[player.KEY.ENTER]) {
        document.location.reload();
      }
    }

    if (instanceBallScore <= score && !playerDead) {
      obsM.createImg();
      instanceBallScore += Math.floor(Math.random() * maxInstance)+minInstance;
      if (minInstance > 1.5) {//1.5
        minInstance -= 0.2;
      }
      if(maxInstance > 1.6) {
        maxInstance -= 0.2;
      }

    }

    if (playerDead) {
      clearInterval(intervalIncreaseScore);
    }
    if (!playerDead) {
      $("#score").text("Score " + score);
    }

}, 30);

intervalIncreaseScore = setInterval(increaseScore, 500);
function increaseScore () {
  score += 1;
}
