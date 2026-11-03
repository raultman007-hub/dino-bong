let imgCat, imgBongo, imgPawLeft, imgPawRight, imgCymbal, imgMouth, imgKeyboard, imgTambourine, imgMarimba; // Adicionado: imgMarimba
let somBongo, somMeow, somCymbal;
let somKeyboard, somKeyboard2, somKeyboard3, somKeyboard4, somKeyboard5, somKeyboard6, somKeyboard7, somKeyboard8, somKeyboard9, somKeyboard0;
let somTambourine;
let imgDino
// Adicionado: sons da marimba de 0 a 9
let somMarimba0, somMarimba1, somMarimba2, somMarimba3, somMarimba4, somMarimba5, somMarimba6, somMarimba7, somMarimba8, somMarimba9;
var imgCowbell
var somCowbell
// Estados das patas
let pawLeftDown = false;
let pawRightDown = false;

let isMeowing = false; // Controle da boca aberta

let instrumentoAtual = 'bongo';

// Posição e velocidade vertical do gato
let catY = 0;
let velocityY = 0;

function preload() {
  // Carregamento dos sprites originais
  imgDino = loadImage('images/dino.png');
  imgCowbell = loadImage('images/cowbell.png');
  imgBongo = loadImage('images/bongo.png');
  imgCymbal = loadImage('images/cymbal.png');
  imgKeyboard = loadImage('images/keyboard.png');
  imgTambourine = loadImage('images/tambourine.png');
  imgMarimba = loadImage('images/marimba.png'); // Adicionado: imagem da marimba
  imgPawLeft = loadImage('images/paw-left.png');
  imgPawRight = loadImage('images/paw-right.png');

  imgMouth = loadImage('images/mouth.png');

  // Carregamento do áudio
  soundFormats('wav', 'mp3');
  somBongo = loadSound('sounds/bongo0.wav');
  somMeow = loadSound('sounds/meow.wav');
  somCymbal = loadSound('sounds/cymbal.mp3');

  // Sons do teclado de 1 a 0
  somKeyboard = loadSound('sounds/keyboard1.mp3');
  somKeyboard2 = loadSound('sounds/keyboard2.mp3');
  somKeyboard3 = loadSound('sounds/keyboard3.mp3');
  somKeyboard4 = loadSound('sounds/keyboard4.mp3');
  somKeyboard5 = loadSound('sounds/keyboard5.mp3');
  somKeyboard6 = loadSound('sounds/keyboard6.mp3');
  somKeyboard7 = loadSound('sounds/keyboard7.mp3');
  somKeyboard8 = loadSound('sounds/keyboard8.mp3');
  somKeyboard9 = loadSound('sounds/keyboard9.mp3');
  somKeyboard0 = loadSound('sounds/keyboard0.mp3');

  // Som do pandeiro
  somTambourine = loadSound('sounds/tambourine.mp3');

  // Adicionado: Sons da marimba de 0 a 9
  somMarimba0 = loadSound('sounds/marimba0.mp3');
  somMarimba1 = loadSound('sounds/marimba1.mp3');
  somMarimba2 = loadSound('sounds/marimba2.mp3');
  somMarimba3 = loadSound('sounds/marimba3.mp3');
  somMarimba4 = loadSound('sounds/marimba4.mp3');
  somMarimba5 = loadSound('sounds/marimba5.mp3');
  somMarimba6 = loadSound('sounds/marimba6.mp3');
  somMarimba7 = loadSound('sounds/marimba7.mp3');
  somMarimba8 = loadSound('sounds/marimba8.mp3');
  somMarimba9 = loadSound('sounds/marimba9.mp3');

  somCowbell = loadSound('sounds/cowbell.mp3');
}

function setup() {
  // Resolução nativa dos assets do Bongo Cat
  createCanvas(1000, 450);
}

function draw() {
  background(0);

  // 1. Linha da mesa inclinada (igual ao original)
  stroke(0);
  strokeWeight(5);
  line(-50, 180, 1000, 370);
  noStroke();

  // 2. Instrumento de fundo
  if (instrumentoAtual === 'bongo') {
    image(imgBongo, 0, 0, 800, 450);
  } else if (instrumentoAtual === 'cymbal') {
    image(imgCymbal, 0, 0, 800, 450);
  } else if (instrumentoAtual === 'keyboard') {
    image(imgKeyboard, 0, 0, 800, 450);
  } else if (instrumentoAtual === 'tambourine') {
    image(imgTambourine, 0, 0, 800, 450);
  } else if (instrumentoAtual === 'marimba') { // Adicionado: desenho da marimba
    image(imgMarimba, 0, 0, 800, 450);
  } else if (instrumentoAtual === 'cowbell') { // Adicionado: desenho da cowbell
    image(imgCowbell, 0, 0, 800, 450);
  }

  // 3. Cabeça e corpo do gato (recorte superior 800x450)
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////image(imgCat, 0, catY, 800, 450, 0, 450, 800, 450);
  image(imgDino, 410, catY - 30, 200, 250);
  // 4. BOCA E NARIZ (imgMouth)
  let sxMouth = isMeowing ? 800 : 0;

  image(
    imgMouth,
    0, catY, 800, 450,
    sxMouth, 450, 800, 450
  );

  // 4. Pata Esquerda (Tecla A)
  let sxLeft = pawLeftDown ? 800 : 0;
  image(imgPawLeft, 0, catY, 800, 450, sxLeft, 450, 800, 450);

  // 5. Pata Direita (Tecla D)
  let sxRight = pawRightDown ? 800 : 0;
  image(imgPawRight, 0, catY, 800, 450, sxRight, 450, 800, 450);

  catY += velocityY;
}

function keyPressed() {

  // Quando aperta a seta para CIMA, dá a velocidade negativa (sobe suavemente)
  if (keyCode === UP_ARROW) {
    velocityY = -5; // Quanto mais negativo, mais rápido ele sobe
  }
  // Pata esquerda (Bongo)
  if (key === 'a' || key === 'A') {
    instrumentoAtual = 'bongo';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarBongo();
    }
  }

  // Pata direita (Bongo)
  if (key === 'd' || key === 'D') {
    instrumentoAtual = 'bongo';
    if (!pawRightDown) {
      pawRightDown = true;
      tocarBongo();
    }
  }

  // Prato
  if (key === 'c' || key === 'C') {
    instrumentoAtual = 'cymbal';
    if (!pawRightDown) {
      pawLeftDown = true;
      tocarSymbol();
    }
  }

  // Pandeiro (Tecla B - Pata Esquerda)
  if (key === 'b' || key === 'B') {
    instrumentoAtual = 'tambourine';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarTambourine();
    }
  }
  if (key === 'v' || key === 'v') {
    instrumentoAtual = 'cowbell';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarCowbell();
    }
  }

  // Teclado 1 a 5 (Pata DIREITA)
  if (key === '1') {
    instrumentoAtual = 'keyboard';
    if (!pawRightDown) {
      pawRightDown = true;
      tocarKeyboard(somKeyboard);
    }
  }
  if (key === '2') {
    instrumentoAtual = 'keyboard';
    if (!pawRightDown) {
      pawRightDown = true;
      tocarKeyboard(somKeyboard2);
    }
  }
  if (key === '3') {
    instrumentoAtual = 'keyboard';
    if (!pawRightDown) {
      pawRightDown = true;
      tocarKeyboard(somKeyboard3);
    }
  }
  if (key === '4') {
    instrumentoAtual = 'keyboard';
    if (!pawRightDown) {
      pawRightDown = true;
      tocarKeyboard(somKeyboard4);
    }
  }
  if (key === '5') {
    instrumentoAtual = 'keyboard';
    if (!pawRightDown) {
      pawRightDown = true;
      tocarKeyboard(somKeyboard5);
    }
  }

  // Teclado 6 a 0 (Pata ESQUERDA)
  if (key === '6') {
    instrumentoAtual = 'keyboard';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarKeyboard(somKeyboard6);
    }
  }
  if (key === '7') {
    instrumentoAtual = 'keyboard';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarKeyboard(somKeyboard7);
    }
  }
  if (key === '8') {
    instrumentoAtual = 'keyboard';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarKeyboard(somKeyboard8);
    }
  }
  if (key === '9') {
    instrumentoAtual = 'keyboard';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarKeyboard(somKeyboard9);
    }
  }
  if (key === '0') {
    instrumentoAtual = 'keyboard';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarKeyboard(somKeyboard0);
    }
  }

  // Marimba (Teclas Q a T - Pata DIREITA)
  if (key === 'q' || key === 'Q') {
    instrumentoAtual = 'marimba';
    if (!pawRightDown) {
      pawRightDown = true;
      tocarMarimba(somMarimba0);
    }
  }
  if (key === 'w' || key === 'W') {
    instrumentoAtual = 'marimba';
    if (!pawRightDown) {
      pawRightDown = true;
      tocarMarimba(somMarimba1);
    }
  }
  if (key === 'e' || key === 'E') {
    instrumentoAtual = 'marimba';
    if (!pawRightDown) {
      pawRightDown = true;
      tocarMarimba(somMarimba2);
    }
  }
  if (key === 'r' || key === 'R') {
    instrumentoAtual = 'marimba';
    if (!pawRightDown) {
      pawRightDown = true;
      tocarMarimba(somMarimba3);
    }
  }
  if (key === 't' || key === 'T') {
    instrumentoAtual = 'marimba';
    if (!pawRightDown) {
      pawRightDown = true;
      tocarMarimba(somMarimba4);
    }
  }

  // Marimba (Teclas Y a P - Pata ESQUERDA)
  if (key === 'y' || key === 'Y') {
    instrumentoAtual = 'marimba';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarMarimba(somMarimba5);
    }
  }
  if (key === 'u' || key === 'U') {
    instrumentoAtual = 'marimba';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarMarimba(somMarimba6);
    }
  }
  if (key === 'i' || key === 'I') {
    instrumentoAtual = 'marimba';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarMarimba(somMarimba7);
    }
  }
  if (key === 'o' || key === 'O') {
    instrumentoAtual = 'marimba';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarMarimba(somMarimba8);
    }
  }
  if (key === 'p' || key === 'P') {
    instrumentoAtual = 'marimba';
    if (!pawLeftDown) {
      pawLeftDown = true;
      tocarMarimba(somMarimba9);
    }
  }

  // Miado (Barra de Espaço)
  if (key === ' ') {
    if (!isMeowing) {
      isMeowing = true;
      if (somMeow && somMeow.isLoaded()) {
        somMeow.play();
      }
    }
  }
}

function keyReleased() {
  // Pata esquerda
  if (key === 'a' || key === 'A') {
    pawLeftDown = false;
  }
  if (key === 'c' || key === 'C') {
    pawLeftDown = false;
  }
  if (key === 'b' || key === 'B') {
    pawLeftDown = false;
  }
  if (key === 'v' || key === 'V') {
    pawLeftDown = false;
  }
  if (key === '6') {
    pawLeftDown = false;
  }
  if (key === '7') {
    pawLeftDown = false;
  }
  if (key === '8') {
    pawLeftDown = false;
  }
  if (key === '9') {
    pawLeftDown = false;
  }
  if (key === '0') {
    pawLeftDown = false;
  }

  // Soltar Pata esquerda da Marimba (Y a P)
  if (key === 'y' || key === 'Y') {
    pawLeftDown = false;
  }
  if (key === 'u' || key === 'U') {
    pawLeftDown = false;
  }
  if (key === 'i' || key === 'I') {
    pawLeftDown = false;
  }
  if (key === 'o' || key === 'O') {
    pawLeftDown = false;
  }
  if (key === 'p' || key === 'P') {
    pawLeftDown = false;
  }

  // Pata direita
  if (key === 'd' || key === 'D') {
    pawRightDown = false;
  }
  if (key === '1') {
    pawRightDown = false;
  }
  if (key === '2') {
    pawRightDown = false;
  }
  if (key === '3') {
    pawRightDown = false;
  }
  if (key === '4') {
    pawRightDown = false;
  }
  if (key === '5') {
    pawRightDown = false;
  }

  // Soltar Pata direita da Marimba (Q a T)
  if (key === 'q' || key === 'Q') {
    pawRightDown = false;
  }
  if (key === 'w' || key === 'W') {
    pawRightDown = false;
  }
  if (key === 'e' || key === 'E') {
    pawRightDown = false;
  }
  if (key === 'r' || key === 'R') {
    pawRightDown = false;
  }
  if (key === 't' || key === 'T') {
    pawRightDown = false;
  }

  // Miado (Barra de Espaço)
  if (key === ' ') {
    isMeowing = false;
    if (somMeow && somMeow.isLoaded()) {
      somMeow.stop();
    }
  }
}

function tocarBongo() {
  if (somBongo && somBongo.isLoaded()) {
    somBongo.play();
  }
}

function tocarSymbol() {
  if (somCymbal && somCymbal.isLoaded()) {
    somCymbal.play();
  }
}

function tocarKeyboard(n) {
  if (n && n.isLoaded()) {
    n.play();
  }
}

function tocarTambourine() {
  if (somTambourine && somTambourine.isLoaded()) {
    somTambourine.play();
  }
}

// Adicionado: função para tocar o som da marimba
function tocarMarimba(n) {
  if (n && n.isLoaded()) {
    n.play();
  }
}
function tocarCowbell() {
  if (somCowbell && somCowbell.isLoaded()) {
    somCowbell.play();
  }
}