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

  public primeiroClique: any = []
  public segundoClique: any = []

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
    private _flipCardService: FlipCardService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.startGame();
    }, 3000);

    this.getImagens();
  }

  public getImagens() {
    this._flipCardService.getImages().subscribe((response) =>
      // console.log(response),
      this.listaImagens = response
    );
  }

  public getImagensById(id: number) {
    this._flipCardService.getImagesById(id).subscribe((response) =>
      // console.log(response),
      this.listaImagensById = response
    );
  }

  toggle1(event: Event) {
    const imgSass = this.sass.nativeElement.src;
    if(event) {
      this.primeiroClique.push(imgSass);
    }
    console.log(this.primeiroClique)
    this.toggleProperty1 = !this.toggleProperty1;
  }

  toggle2(event: Event) {
    const imgDart = this.dart.nativeElement.src;
    this.toggleProperty2 = !this.toggleProperty2;
  }

  toggle3() {
    const imgDocker = this.docker.nativeElement.src;
    this.toggleProperty3 = !this.toggleProperty3;
  }

  toggle4() {
    const imgGithub = this.github.nativeElement.src;
    this.toggleProperty4 = !this.toggleProperty4;
  }

  toggle5() {
    const imgGoLang = this.golang.nativeElement.src;
    this.toggleProperty5 = !this.toggleProperty5;
  }

  toggle6() {
    const imgKotlin = this.kotlin.nativeElement.src;
    this.toggleProperty6 = !this.toggleProperty6;    
  }

  toggle7() {
    const imgGithub = this.github.nativeElement.src;
    this.toggleProperty7 = !this.toggleProperty7;
  }

  toggle8() {
    const imgDocker = this.docker.nativeElement.src;
    this.toggleProperty8 = !this.toggleProperty8;
  }

  toggle9() {
    const imgSass = this.sass.nativeElement.src;
    this.toggleProperty9 = !this.toggleProperty9;
  }

  toggle10() {
    const imgKotlin = this.kotlin.nativeElement.src;
    this.toggleProperty10 = !this.toggleProperty10;
  }
  
  toggle11() {
    const imgDart = this.dart.nativeElement.src;
    this.toggleProperty11 = !this.toggleProperty11;
  }

  toggle12() {
    const imgGoLang = this.golang.nativeElement.src;
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
