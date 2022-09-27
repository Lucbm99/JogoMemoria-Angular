import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss'],
})
export class FlipCardComponent implements OnInit {
  @ViewChild('dart', { static: true }) dart!: ElementRef;
  @ViewChild('sass', { static: true }) sass!: ElementRef;
  @ViewChild('docker', { static: true }) docker!: ElementRef;
  @ViewChild('github', { static: true }) github!: ElementRef;
  @ViewChild('golang', { static: true }) golang!: ElementRef;
  @ViewChild('kotlin', { static: true }) kotlin!: ElementRef;

  public listaImagens: any;
  public listaImagensById: any;

  public primeiroClique: any = [];
  public segundoClique: any = [];

  toggleProperty1 = true;
  toggleProperty2 = true;
  toggleProperty3 = true;
  toggleProperty4 = true;
  toggleProperty5 = true;
  toggleProperty6 = true;
  toggleProperty7 = true;
  toggleProperty8 = true;
  toggleProperty9 = true;
  toggleProperty10 = true;
  toggleProperty11 = true;
  toggleProperty12 = true;

  constructor() // private _flipCardService: FlipCardService,
  {}

  ngOnInit() {
    setTimeout(() => {
      this.startGame();
    }, 3000);
  }

  toggle1(event: Event) {
    const imgSass = this.sass.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgSass,
        wasFound: true,
        id: 1,
      });
    }
    this.toggleProperty1 = !this.toggleProperty1;
    
    var arr:any = [];

    if (this.primeiroClique.length > 0) {
      this.primeiroClique.filter(function(item: any){
        var i = arr.findIndex((x:any) => (x.src !== item.src));
        if(i <= -1){
          arr.push(item);
        }
        return null;
      });

      this.primeiroClique = this.primeiroClique.filter((item: any) => !arr.includes(item))

      if(this.primeiroClique[0]?.id === 1){
        this.toggleProperty1 = true;
        this.toggleProperty2 = false;
        this.toggleProperty3 = false;
        this.toggleProperty4 = false;
        this.toggleProperty5 = false;
        this.toggleProperty6 = false;
        this.toggleProperty7 = false;
        this.toggleProperty8 = false;
        this.toggleProperty9 = false;
        this.toggleProperty10 = false;
        this.toggleProperty11 = false;
        this.toggleProperty12 = false;
      }
    }
  }

  toggle1Remove(event: Event) {
    const imgSass = this.sass.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgSass);
    }
    // console.log(this.primeiroClique);
    this.toggleProperty1 = !this.toggleProperty1;
  }

  toggle2(event: Event) {
    const imgDart = this.dart.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgDart,
        wasFound: true,
        id: 2,
      });
    }

    this.toggleProperty2 = !this.toggleProperty2;

    var arr:any = [];

    if (this.primeiroClique.length > 0) {
      this.primeiroClique.filter(function(item: any){
        var i = arr.findIndex((x:any) => (x.src !== item.src));
        if(i <= -1){
          arr.push(item);
        }
        return null;
      });

      this.primeiroClique = this.primeiroClique.filter((item: any) => !arr.includes(item))

      if(this.primeiroClique[0]?.id === 2){
        this.toggleProperty1 = false;
        this.toggleProperty2 = true;
        this.toggleProperty3 = false;
        this.toggleProperty4 = false;
        this.toggleProperty5 = false;
        this.toggleProperty6 = false;
        this.toggleProperty7 = false;
        this.toggleProperty8 = false;
        this.toggleProperty9 = false;
        this.toggleProperty10 = false;
        this.toggleProperty11 = false;
        this.toggleProperty12 = false;
      }
    }
  }

  toggle2Remove(event: Event) {
    const imgDart = this.dart.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgDart);
    }
    // console.log(this.primeiroClique)
    this.toggleProperty2 = !this.toggleProperty2;
  }

  toggle3(event: Event) {
    const imgDocker = this.docker.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgDocker,
        wasFound: true,
        id: 3,
      });
    }

    this.toggleProperty3 = !this.toggleProperty3;

    var arr:any = [];

    if (this.primeiroClique.length > 0) {
      this.primeiroClique.filter(function(item: any){
        var i = arr.findIndex((x:any) => (x.src !== item.src));
        if(i <= -1){
          arr.push(item);
        }
        return null;
      });

      this.primeiroClique = this.primeiroClique.filter((item: any) => !arr.includes(item))

      if(this.primeiroClique[0]?.id === 3){
        this.toggleProperty1 = false;
        this.toggleProperty2 = false;
        this.toggleProperty3 = true;
        this.toggleProperty4 = false;
        this.toggleProperty5 = false;
        this.toggleProperty6 = false;
        this.toggleProperty7 = false;
        this.toggleProperty8 = false;
        this.toggleProperty9 = false;
        this.toggleProperty10 = false;
        this.toggleProperty11 = false;
        this.toggleProperty12 = false;
      }
    }

  }

  toggle3Remove(event: Event) {
    const imgDocker = this.docker.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgDocker);
    }
    this.toggleProperty3 = !this.toggleProperty3;
  }

  toggle4(event: Event) {
    const imgGithub = this.github.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgGithub,
        wasFound: true,
        id: 4,
      });
    }

    // console.log(this.primeiroClique);
    //verificando se os dois itens iniciais no array primeiroClique são iguais

    // let checkCardsEqual = this.primeiroClique.every((val: any, i: any, arr: any) => val === arr[0])
    // console.log(checkCardsEqual);
    // if(checkCardsEqual === false) {
    //   setTimeout(() => {
    //     this.startGame();
    //     this.primeiroClique = [];
    //   }, 1000);
    // }

    this.toggleProperty4 = !this.toggleProperty4;
    if (this.primeiroClique.length > 0 && this.primeiroClique.length <= 2) {
      if (this.primeiroClique[0]?.src === this.primeiroClique[1]?.src) {
        console.log('achou!!');
      } else {
        let checkCardsEqual = this.primeiroClique.every(
          (val: any, i: any, arr: any) => val === arr[0]
        );
        console.log(checkCardsEqual);
        // if (checkCardsEqual === false) {
        //   setTimeout(() => {
        //     this.startGame();
        //     this.primeiroClique = [];
        //   }, 1000);
        // }
      }
    }
  }

  toggle4Remove(event: Event) {
    const imgGithub = this.github.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgGithub);
    }
    this.toggleProperty4 = !this.toggleProperty4;
  }

  toggle5(event: Event) {
    const imgGoLang = this.golang.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgGoLang,
        wasFound: true,
        id: 5,
      });
    }
    // console.log(this.primeiroClique)

    //verificando se os dois itens iniciais no array primeiroClique são iguais

    //   let checkCardsEqual = this.primeiroClique.every((val: any, i: any, arr: any) => val === arr[0])
    //   console.log(checkCardsEqual);
    //   if(checkCardsEqual === false) {
    //     setTimeout(() => {
    //       this.startGame();
    //       this.primeiroClique = [];
    //     }, 1000);
    // }

    this.toggleProperty5 = !this.toggleProperty5;
    if (this.primeiroClique.length > 0 && this.primeiroClique.length <= 2) {
      if (this.primeiroClique[0]?.src === this.primeiroClique[1]?.src) {
        console.log('achou!!');
      } else {
        let checkCardsEqual = this.primeiroClique.every(
          (val: any, i: any, arr: any) => val === arr[0]
        );
        console.log(checkCardsEqual);
        // if (checkCardsEqual === false) {
        //   setTimeout(() => {
        //     this.startGame();
        //     this.primeiroClique = [];
        //   }, 1000);
        // }
      }
    }
  }

  toggle5Remove(event: Event) {
    const imgGoLang = this.golang.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgGoLang);
    }
    this.toggleProperty5 = !this.toggleProperty5;
  }

  toggle6(event: Event) {
    const imgKotlin = this.kotlin.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgKotlin,
        wasFound: true,
        id: 6,
      });
    }
    // console.log(this.primeiroClique)

    //verificando se os dois itens iniciais no array primeiroClique são iguais
    //   let checkCardsEqual = this.primeiroClique.every((val: any, i: any, arr: any) => val === arr[0])
    //   console.log(checkCardsEqual);
    //   if(checkCardsEqual === false) {
    //     setTimeout(() => {
    //       this.startGame();
    //       this.primeiroClique = [];
    //     }, 1000);
    // }

    this.toggleProperty6 = !this.toggleProperty6;
    if (this.primeiroClique.length > 0 && this.primeiroClique.length <= 2) {
      if (this.primeiroClique[0]?.src === this.primeiroClique[1]?.src) {
        console.log('achou!!');
      } else {
        let checkCardsEqual = this.primeiroClique.every(
          (val: any, i: any, arr: any) => val === arr[0]
        );
        console.log(checkCardsEqual);
        // if (checkCardsEqual === false) {
        //   setTimeout(() => {
        //     this.startGame();
        //     this.primeiroClique = [];
        //   }, 1000);
        // }
      }
    }
  }

  toggle6Remove(event: Event) {
    const imgKotlin = this.kotlin.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgKotlin);
    }
    this.toggleProperty6 = !this.toggleProperty6;
  }

  toggle7(event: Event) {
    const imgGithub = this.github.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgGithub,
        wasFound: true,
        id: 7,
      });
    }
    // console.log(this.primeiroClique)

    //verificando se os dois itens iniciais no array primeiroClique são iguais
    //   let checkCardsEqual = this.primeiroClique.every((val: any, i: any, arr: any) => val === arr[0])
    //   console.log(checkCardsEqual);
    //   if(checkCardsEqual === false) {
    //     setTimeout(() => {
    //       this.startGame();
    //       this.primeiroClique = [];
    //     }, 1000);
    // }

    this.toggleProperty7 = !this.toggleProperty7;
    if (this.primeiroClique.length > 0 && this.primeiroClique.length <= 2) {
      if (this.primeiroClique[0]?.src === this.primeiroClique[1]?.src) {
        console.log('achou!!');
      } else {
        let checkCardsEqual = this.primeiroClique.every(
          (val: any, i: any, arr: any) => val === arr[0]
        );
        console.log(checkCardsEqual);
        // if (checkCardsEqual === false) {
        //   setTimeout(() => {
        //     this.startGame();
        //     this.primeiroClique = [];
        //   }, 1000);
        // }
      }
    }
  }

  toggle7Remove(event: Event) {
    const imgGithub = this.github.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgGithub);
    }
    this.toggleProperty7 = !this.toggleProperty7;
  }

  toggle8(event: Event) {
    const imgDocker = this.docker.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgDocker,
        wasFound: true,
        id: 8,
      });
    }
    // console.log(this.primeiroClique)

    //verificando se os dois itens iniciais no array primeiroClique são iguais
    //   let checkCardsEqual = this.primeiroClique.every((val: any, i: any, arr: any) => val === arr[0])
    //   console.log(checkCardsEqual);
    //   if(checkCardsEqual === false) {
    //     setTimeout(() => {
    //       this.startGame();
    //       this.primeiroClique = [];
    //     }, 1000);
    // }

    this.toggleProperty8 = !this.toggleProperty8;
    if (this.primeiroClique.length > 0 && this.primeiroClique.length <= 2) {
      if (this.primeiroClique[0]?.src === this.primeiroClique[1]?.src) {
        console.log('achou!!');
      } else {
        let checkCardsEqual = this.primeiroClique.every(
          (val: any, i: any, arr: any) => val === arr[0]
        );
        console.log(checkCardsEqual);
        // if (checkCardsEqual === false) {
        //   setTimeout(() => {
        //     this.startGame();
        //     this.primeiroClique = [];
        //   }, 1000);
        // }
      }
    }
  }

  toggle8Remove(event: Event) {
    const imgDocker = this.docker.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgDocker);
    }
    this.toggleProperty8 = !this.toggleProperty8;
  }

  toggle9(event: Event) {
    const imgSass = this.sass.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgSass,
        wasFound: true,
        id: 9,
      });
    }
    
    var arr:any = [];

    if (this.primeiroClique.length > 0) {
      this.primeiroClique.filter(function(item: any){
        var i = arr.findIndex((x:any) => (x.src !== item.src));
        if(i <= -1){
          arr.push(item);
        }
        return null;
      });

      this.primeiroClique = this.primeiroClique.filter((item: any) => !arr.includes(item))

      if(this.primeiroClique[0]?.id === 9){
        this.toggleProperty1 = true;
        this.toggleProperty2 = true;
        this.toggleProperty3 = true;
        this.toggleProperty4 = true;
        this.toggleProperty5 = true;
        this.toggleProperty6 = true;
        this.toggleProperty7 = true;
        this.toggleProperty8 = true;
        this.toggleProperty9 = false;
        this.toggleProperty10 = true;
        this.toggleProperty11 = true;
        this.toggleProperty12 = true;
      }
    }

  }

  toggle9Remove(event: Event) {
    const imgSass = this.sass.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgSass);
    }
    this.toggleProperty9 = !this.toggleProperty9;
  }

  toggle10(event: Event) {
    const imgKotlin = this.kotlin.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgKotlin,
        wasFound: true,
        id: 10,
      });
    }
    // console.log(this.primeiroClique)
    //verificando se os dois itens iniciais no array primeiroClique são iguais
    //   let checkCardsEqual = this.primeiroClique.every((val: any, i: any, arr: any) => val === arr[0])
    //   console.log(checkCardsEqual);
    //   if(checkCardsEqual === false) {
    //     setTimeout(() => {
    //       this.startGame();
    //       this.primeiroClique = [];
    //     }, 1000);
    // }

    this.toggleProperty10 = !this.toggleProperty10;
    if (this.primeiroClique.length > 0 && this.primeiroClique.length <= 2) {
      if (this.primeiroClique[0]?.src === this.primeiroClique[1]?.src) {
        console.log('achou!!');
      } else {
        let checkCardsEqual = this.primeiroClique.every(
          (val: any, i: any, arr: any) => val === arr[0]
        );
        console.log(checkCardsEqual);
        // if (checkCardsEqual === false) {
        //   setTimeout(() => {
        //     this.startGame();
        //     this.primeiroClique = [];
        //   }, 1000);
        // }
      }
    }
  }

  toggle10Remove(event: Event) {
    const imgKotlin = this.kotlin.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgKotlin);
    }
    this.toggleProperty10 = !this.toggleProperty10;
  }

  toggle11(event: Event) {
    const imgDart = this.dart.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgDart,
        wasFound: true,
        id: 11,
      });
    }

    this.toggleProperty11 = !this.toggleProperty11;
    if (this.primeiroClique.length > 0 && this.primeiroClique.length <= 2) {
      if (this.primeiroClique[0]?.src === this.primeiroClique[1]?.src) {
        console.log('achou!!');
      } else {
        let checkCardsEqual = this.primeiroClique.every(
          (val: any, i: any, arr: any) => val === arr[0]
        );
        console.log(checkCardsEqual);
        // if (checkCardsEqual === false) {
        //   setTimeout(() => {
        //     this.startGame();
        //     this.primeiroClique = [];
        //   }, 1000);
        // }
      }
    }
  }

  toggle11Remove(event: Event) {
    const imgDart = this.dart.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgDart);
    }
    this.toggleProperty11 = !this.toggleProperty11;
  }

  toggle12(event: Event) {
    const imgGoLang = this.golang.nativeElement.src;
    if (event) {
      this.primeiroClique.push({
        src: imgGoLang,
        wasFound: true,
        id: 12,
      });
    }
    // console.log(this.primeiroClique)
    //verificando se os dois itens iniciais no array primeiroClique são iguais
    // let checkCardsEqual = this.primeiroClique.every(
    //   (val: any, i: any, arr: any) => val === arr[0]
    // );
    // console.log(checkCardsEqual);
    // if (checkCardsEqual === false) {
    //   setTimeout(() => {
    //     this.startGame();
    //     this.primeiroClique = [];
    //   }, 1000);
    // }

    this.toggleProperty12 = !this.toggleProperty12;
    if (this.primeiroClique.length > 0 && this.primeiroClique.length <= 2) {
      if (this.primeiroClique[0]?.src === this.primeiroClique[1]?.src) {
        console.log('achou!!');
      } else {
        let checkCardsEqual = this.primeiroClique.every(
          (val: any, i: any, arr: any) => val === arr[0]
        );
        console.log(checkCardsEqual);
        // if (checkCardsEqual === false) {
        //   setTimeout(() => {
        //     this.startGame();
        //     this.primeiroClique = [];
        //   }, 1000);
        // }
      }
    }
  }

  toggle12Remove(event: Event) {
    const imgGoLang = this.golang.nativeElement.src;
    if (event) {
      this.primeiroClique.pop(imgGoLang);
    }
    this.toggleProperty12 = !this.toggleProperty12;
  }

  startGame() {
    this.toggleProperty1 = false;
    this.toggleProperty2 = false;
    this.toggleProperty3 = false;
    this.toggleProperty4 = false;
    this.toggleProperty5 = false;
    this.toggleProperty6 = false;
    this.toggleProperty7 = false;
    this.toggleProperty8 = false;
    this.toggleProperty9 = false;
    this.toggleProperty10 = false;
    this.toggleProperty11 = false;
    this.toggleProperty12 = false;
  }
}
