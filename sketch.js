let jogadorA = 65, jogadorB = 265, jogadorC = 60;
let obstaculos = [];
let velocidadeObstaculo = 6;
let jogoAtivo = true;

function setup() {
  createCanvas(600, 460);
}

function draw() {
  background("yellow");

  // Desenha o jogador
  fill(0, 0, "white");
  rect(jogadorA, jogadorB, jogadorC, jogadorC);

  // Movimento do jogador
  if (keyIsDown(UP_ARROW) && jogadorB > 0) jogadorB -= 7;
  if (keyIsDown(DOWN_ARROW) && jogadorB < height - jogadorC) jogadorC += 7;

  // Adiciona obstáculos
  if (frameCount % 75 === 0 && jogoAtivo) {
    let oX = width;
    let oY = random(0, height - 50);
    obstaculos.push({ x: oX, y: oY });
  }

}
