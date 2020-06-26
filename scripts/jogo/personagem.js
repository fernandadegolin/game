class Personagem extends Animacao{
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
    
    
    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    
    this.velocidadePulo = 0;
    this.gravidade = 3;
 }
  

  pula(){
    this.velocidadePulo = 50;
  }
  
  aplicaGravidade(){
    this.y = this.y = this.velocidadePulo;
    this.velocidadePulo = this.velocidadePulo + this.gravidade;
  
    if(this.y > this.yInicial){
    this.y = this.yInicial;
   }
  }
  
}