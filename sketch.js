let sprites = {
    // 第一個角色的精靈圖（原有的）
    player1: {
      idle: {
        img: null,
        width: 165,
        height: 188,
        frames: 16
      },
      walk: {
        img: null,
        width: 166,
        height: 177,
        frames: 6
      },
      
      jump: {
        img: null,
        width: 228,
        height: 177,
        frames: 10
      }
    },
    // 第二個角色的精靈圖
    player2: {
      idle: {
        img: null,
        width: 88,
        height: 191,
        frames: 8
      },
      walk: {
        img: null,
        width: 177,
        height: 177,
        frames: 11
      },
      jump: {
        img: null,
        width: 221,
        height: 185,
        frames: 12
      }
    },
     explosion: {  //爆炸圖
      img: null,
      width: 133,
      height: 100,
      frames: 4
    },
    bullet: {  //發射子彈
      img: null,
      width: 70,
      height: 46,
      frames: 8
    }
  };
  function preload() {
    // 載入背景圖片
    bgImage = loadImage('ocean.jng');
  
  // 載入角色1的圖片
  sprites.player1.idle.img = loadImage('5.png');
  sprites.player1.walk.img = loadImage('7.png');
  sprites.player1.jump.img = loadImage('11.png');
  
  // 載入角色2的圖片
  sprites.player2.idle.img = loadImage('9.png');
  sprites.player2.walk.img = loadImage('8.png');
  sprites.player2.jump.img = loadImage('10.png');
  
  }

  
  
  function setup() {
    createCanvas(800, 600);
    frameRate(30);
  }
  
  function draw() {
    background(220);
    
    // 繪製角色1
    drawCharacter(player1, sprites.player1);
    
    // 繪製角色2
    drawCharacter(player2, sprites.player2);
    
    // 更新動畫幀
    if (frameCount % 5 === 0) {
      updateAnimation(player1, sprites.player1);
      updateAnimation(player2, sprites.player2);
    }
  }