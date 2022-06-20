
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

//cor da tela
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
 }



