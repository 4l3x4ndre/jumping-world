nuageId = 0;
nuageSpeed = 1;

function NuagesManager() {
  this.nuages = [];


  this.createImg = function() {
    let e = document.createElement('img');
    e.setAttribute('src', './nuage.png');
    e.setAttribute('class', 'nuages');
    e.setAttribute('id', 'nuage' + nuageId);
    e.setAttribute('style', `top: 100px; left: 400px; z-index: 1; width: 80; height:50; position: absolute;`);
    randomY = Math.floor(Math.random() * 150) + 0;
    randomX = Math.floor(Math.random() * 300) + 400;
    let o = {
      id: "#nuage"+ nuageId,
      idWithoutDies: "nuage" + nuageId,
      x: randomX,
      y: randomY,
      angleD: 0,
      angleSpeed: 0.3,
      speed: 5,
      elt: e,
      width: 80
    }
    o.speed = nuageSpeed;
    this.nuages.push(o);
    document.getElementById("playground").appendChild(e);
    nuageId += 1;
  }

  this.moveNuages = function() {

    let nuagesToRemove = [];

    for (nChild in this.nuages) {
      let n = this.nuages[nChild];


      if (n.x <= 0 - n.width) {
        nuagesToRemove.push(nChild);
        this.createImg();
      }

      n.x -= n.speed;
      $(n.id).css ({
        "left": n.x + "px",
        "top": n.y + "px",
      })
    }

    nuagesToRemove.reverse();
    for (i in nuagesToRemove) {
      $(this.nuages[ nuagesToRemove[i] ].id).remove();
      this.nuages.splice(nuagesToRemove[i], 1);

    }

  }


}
