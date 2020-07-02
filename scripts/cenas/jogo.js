class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
    gameOver = new GameOver(imagemGameOver, TelaDeGameOver, corTelaDeGameOver);
    
    vida = new Vida(3,3);

    cenario = new Cenario(imagemCenario, 1);

    pontuacao = new Pontuacao();

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 4, 100);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10, 200);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 7, 50);

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();
    
    vida.draw();

    personagem.exibe();
    personagem.aplicaGravidade();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    const inimigo = inimigos[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;

      if (this.inimigoAtual > 2) {
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(10, 20));
    }

    if (personagem.estaColidindo(inimigo)) {
      
      
      vida.perdeVida();
      personagem.tornarInvencivel();
        if(vida.vidas === -1){
           console.log('Eita que bati');
          gameOver.exibe();
          somDoJogo.setVolume(0, 3);
          noLoop()
           }
      
      
    }
  }
}