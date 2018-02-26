idObs = 0;
obsSpeed = 5;

function ObstaclesManager() {
  this.obstacles = [];


  this.createImg = function() {
    let e = document.createElement('div');
    e.setAttribute('class', 'obstacle');
    e.setAttribute('id', 'obs' + idObs);
    let o = {
      id: "#obs"+ idObs,
      idWithoutDies: "obs" + idObs,
      x: 400,
      y: 50,
      angleD: 0,
      angleSpeed: 0.3,
      speed: 5,
      elt: e
    }
    o.speed = obsSpeed;
    this.obstacles.push(o);
    document.getElementById("playground").appendChild(e);
    idObs += 1;
  }

  this.moveObstacles = function() {

    let obstaclesToRemove = [];

    for (obsChild in this.obstacles) {
      let ob = this.obstacles[obsChild];
      ob.y = 400- ob.x * Math.tan(ob.angleD * Math.PI/180);

      if (ob.x <= 0) {
        obstaclesToRemove.push(obsChild);
      }

      ob.x -= ob.speed;

      ob.angleSpeed = ob.speed*0.3/2;
      ob.angleD += ob.angleSpeed;



      if (ob.x < player.x + player.width && ob.x + 20 > player.x + player.width
        || ob.x + 20 > player.x && ob.x < player.x) {

        if (ob.y < player.y + player.height) {
          playerDead = true;
        }
      }

      if (ob.x < player.x) {
        let p = ob.id;
        document.getElementById(ob.idWithoutDies).setAttribute('style', 'z-index: 400;');
      }

      $(ob.id).css ({
        "left": ob.x + "px",
        "top": ob.y + "px",
      })
    }

    obstaclesToRemove.reverse();
    for (i in obstaclesToRemove) {
      $(this.obstacles[ obstaclesToRemove[i] ].id).remove();
      this.obstacles.splice(obstaclesToRemove[i], 1);

    }

  }

}
