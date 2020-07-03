class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
  }

  setup() {
    gameOver = new GameOver(imagemGameOver, TelaDeGameOver, corTelaDeGameOver);
    
    vida = new Vida(fita.configuracoes.vidaMaxima,fita.configuracoes.vidaInicial);

    cenario = new Cenario(imagemCenario, 1);

    pontuacao = new Pontuacao();

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 4);

    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 7);

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

    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();

      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
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