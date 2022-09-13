import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FlipCardService } from './flip-card.service';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {
  @ViewChild('dart', { static: true }) dart !: ElementRef;
  @ViewChild('sass', { static: true }) sass !: ElementRef;
  @ViewChild('docker', { static: true }) docker !: ElementRef;
  @ViewChild('github', { static: true }) github !: ElementRef;
  @ViewChild('golang', { static: true }) golang !: ElementRef;
  @ViewChild('kotlin', { static: true }) kotlin !: ElementRef;

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

  constructor(
    // private _flipCardService: FlipCardService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.startGame();
    }, 3000);

    // this.getImagens();
  }

  // public getImagens() {
  //   this._flipCardService.getImages().subscribe((response) =>
  //     // console.log(response),
  //     this.listaImagens = response
  //   );
  // }

  // public getImagensById(id: number) {
  //   this._flipCardService.getImagesById(id).subscribe((response) =>
  //     // console.log(response),
  //     this.listaImagensById = response
  //   );
  // }

  todosIguaisOuDiferentes(array: any) {
    var filtrado = array.filter(function(elem: any, pos: any, arr: any) {
        return arr.indexOf(elem) == pos;
    });

    return filtrado.length === 1 || filtrado.length === array.length; 
}

  toggle1(event: Event) {
    const imgSass = this.sass.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgSass);
    }
    console.log(this.primeiroClique);
    this.toggleProperty1 = !this.toggleProperty1;
  }

  toggle1Remove(event: Event) {
    const imgSass = this.sass.nativeElement.src;
    if(event) {
      this.primeiroClique.pop(imgSass);
    }
    console.log(this.primeiroClique)
    this.toggleProperty1 = !this.toggleProperty1;
  }

  toggle2(event: Event) {
    const imgDart = this.dart.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgDart);
    }
    console.log(this.primeiroClique);
    // let a = this.todosIguaisOuDiferentes(this.primeiroClique);
    // console.log(a);

    // if(a === true) {
    //   this.toggleProperty2 = false;
    // } else {
    //   this.toggleProperty2 = true;
    // }
    this.toggleProperty2 = !this.toggleProperty2;
  }

  toggle2Remove(event: Event) {
    const imgDart = this.dart.nativeElement.src;
    if(event) {
      this.primeiroClique.pop(imgDart);
    }
    console.log(this.primeiroClique)
    this.toggleProperty2 = !this.toggleProperty2;
  }

  toggle3(event: Event) {
    const imgDocker = this.docker.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgDocker);
    }
    this.toggleProperty3 = !this.toggleProperty3;
  }

  toggle3Remove(event: Event) {
    const imgDocker = this.docker.nativeElement.src;
    if(event) {
      this.primeiroClique.pop(imgDocker);
    }
    this.toggleProperty3 = !this.toggleProperty3;
  }

  toggle4(event: Event) {
    const imgGithub = this.github.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgGithub);
    }
    this.toggleProperty4 = !this.toggleProperty4;
  }
  
  toggle4Remove(event: Event) {
    const imgGithub = this.github.nativeElement.src;
    if(event) {
      this.primeiroClique.pop(imgGithub);
    }
    this.toggleProperty4 = !this.toggleProperty4;
  }

  toggle5(event: Event) {
    const imgGoLang = this.golang.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgGoLang);
    }
    this.toggleProperty5 = !this.toggleProperty5;
  }

  toggle5Remove(event: Event) {
    const imgGoLang = this.golang.nativeElement.src;
    if(event) {
      this.primeiroClique.pop(imgGoLang);
    }
    this.toggleProperty5 = !this.toggleProperty5;
  }

  toggle6(event: Event) {
    const imgKotlin = this.kotlin.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgKotlin);
    }
    this.toggleProperty6 = !this.toggleProperty6;    
  }

  toggle6Remove(event: Event) {
    const imgKotlin = this.kotlin.nativeElement.src;
    if(event) {
      this.primeiroClique.pop(imgKotlin);
    }
    this.toggleProperty6 = !this.toggleProperty6;    
  }

  toggle7(event: Event) {
    const imgGithub = this.github.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgGithub);
    }
    this.toggleProperty7 = !this.toggleProperty7;
  }

  toggle7Remove(event: Event) {
    const imgGithub = this.github.nativeElement.src;
    if(event) {
      this.primeiroClique.pop(imgGithub);
    }
    this.toggleProperty7 = !this.toggleProperty7;
  }

  toggle8(event: Event) {
    const imgDocker = this.docker.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgDocker);
    }
    this.toggleProperty8 = !this.toggleProperty8;
  }

  toggle8Remove(event: Event) {
    const imgDocker = this.docker.nativeElement.src;
    if(event) {
      this.primeiroClique.pop(imgDocker);
    }
    this.toggleProperty8 = !this.toggleProperty8;
  }

  toggle9(event: Event) {
    const imgSass = this.sass.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgSass);
    }
    this.toggleProperty9 = !this.toggleProperty9;
  }

  toggle9Remove(event: Event) {
    const imgSass = this.sass.nativeElement.src;
    if(event) {
      this.primeiroClique.pop(imgSass);
    }
    this.toggleProperty9 = !this.toggleProperty9;
  }

  toggle10(event: Event) {
    const imgKotlin = this.kotlin.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgKotlin);
    }
    this.toggleProperty10 = !this.toggleProperty10;
  }

  toggle10Remove(event: Event) {
    const imgKotlin = this.kotlin.nativeElement.src;
    if(event) {
      this.primeiroClique.pop(imgKotlin);
    }
    this.toggleProperty10 = !this.toggleProperty10;
  }
  
  toggle11(event: Event) {
    const imgDart = this.dart.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgDart);
    }
    this.toggleProperty11 = !this.toggleProperty11;
  }

  toggle11Remove(event: Event) {
    const imgDart = this.dart.nativeElement.src;
    if(event) {
      this.primeiroClique.pop(imgDart);
    }
    this.toggleProperty11 = !this.toggleProperty11;
  }

  toggle12(event: Event) {
    const imgGoLang = this.golang.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgGoLang);
    }
    this.toggleProperty12 = !this.toggleProperty12;
  }

  toggle12Remove(event: Event) {
    const imgGoLang = this.golang.nativeElement.src;
    if(event) {
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
