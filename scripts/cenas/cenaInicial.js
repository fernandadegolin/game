class TelaInicial {
  constructor(){
  }

  draw(){
     this._imagemDeFundo();
      this._texto();
  }
  
  _imagemDeFundo(){
  image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont (fonteTelaInicial);
    textSize(40);
    textAlign(CENTER);
    text('As Aventuras da', width / 2, height / 3);
    textSize(70);
    text('Floresta Encantada', width / 2, height /5 * 3);
  }
  
  _botao(){
  botaoGerenciador.draw();
  
  }
}