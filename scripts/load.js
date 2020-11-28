function preload(){
  
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');

  fonteTelaInicial = loadFont ('imagens/cenario/fonteTelaInicial.otf');
  
  imagemVida = loadImage('imagens/cenario/coracao.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage ('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage ('imagens/inimigos/gotinha-voadora.png');
  fita = loadJSON('fita/fita.json');
  
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}
