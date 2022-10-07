import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestartDialogComponent } from './components/restart-dialog/restart-dialog.component';
import { CardData } from './models/card-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jogo-memoria';

  cardImages = [
    'java.png',
    'bootstrap.png',
    'ruby.png',
    'elixir.png',
    'golang.png',
  ];

  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  matchedCount = 0;

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor(private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.setupCards();
  }

  setupCards(): void {
    this.cards = [];

    //baseado no array das imagens declarado na linha 14, com o nome das fotos, preencho um objeto 
    //com a propriedade image -- itens do array em imageSrc. 
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageSrc: image,
        state: 'default'
      };
      console.log(this.cardImages); 

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
      console.log(this.cards); 
      // estrutura --- todas as imagens começam como 'default'
      // {imageSrc: 'java.png', state: 'default'}
      // {imageSrc: 'java.png', state: 'default'}
      // {imageSrc: 'bootstrap.png', state: 'default'}
      // {imageSrc: 'bootstrap.png', state: 'default'}
      // {imageSrc: 'ruby.png', state: 'default'}
      // {imageSrc: 'ruby.png', state: 'default'}
      // {imageSrc: 'wordpress.png', state: 'default'}
      // {imageSrc: 'wordpress.png', state: 'default'}
      // {imageSrc: 'python.png', state: 'default'}
      // {imageSrc: 'python.png', state: 'default'}
    });

    //antes de começar, embaralho os arrays, conforme a estrutura acima
    this.cards = this.shuffleArray(this.cards);
  }

  //função do card clicado
  cardClicked(index: number): void {
    const cardInfo = this.cards[index];
    //pega as informações da imagem clicada (imageSrc e state)

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      //se o status do card for 'default' e o tamanho do array for menor que 2
      //mudo o status dele para 'flipped' --> "virado"
      cardInfo.state = 'flipped';
      //adiciono essa informação no array flippedCards -- do card virado
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        //se o tamanho for maior que 1, confere se os cards virados sao iguais
        this.checkForCardMatch();
      }

    } else if (cardInfo.state === 'flipped') {
      //se os cards virados não forem iguais, volta o estado dele para padrão 
      cardInfo.state = 'default';
      //e remove os itens do array
      this.flippedCards.pop();
    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      //pego o primeiro e o segundo item do array (no caso, os cards clicados), e, se forem
      //iguais, atribuo o valor matched a eles. Caso contrário, ficam default
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageSrc === cardTwo.imageSrc ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState; //ambos os cards ficam com o mesmo estado, seja ele
      //matched ou default

      console.log(cardOne, cardTwo); 
      console.log(nextState); 
      this.flippedCards = [];

      if (nextState === 'matched') {
        //se encontrou o par correspondente, aumento a contagem de matchedCount
        this.matchedCount++;

        // tamanho do array das imagens = 5 --> o jogo termina quando a contagem chega em 5, 
        // devido a ter 5 pares * 2 = 10
        if (this.matchedCount === this.cardImages.length) {
          //se forem iguais, abre a modal de encerramento do jogo
          const dialogRef = this.dialog.open(RestartDialogComponent, {
            disableClose: true
          });

          dialogRef.afterClosed().subscribe(() => {
            //após fechar a modal, restarta o jogo
            this.restart();
          });
        }
      }

    }, 1000);
  }

  restart(): void {
    //a contagem de matchedCount volta para 0 e, invoco a função setupCards -- função inicial
    this.matchedCount = 0;
    this.setupCards();
  }
}
