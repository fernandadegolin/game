class Pontuacao {
  constructor (){
    this.pontos = 0;
  }
  
  exibe(){
    textSize(50);
    fill('#fff');
    textAlign(RIGHT);
    text(parseInt(this.pontos), width -30, 50);
  }
  
  adicionarPonto(){
    this.pontos = this.pontos + .2;
  }
  
}