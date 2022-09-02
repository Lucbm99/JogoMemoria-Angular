import { Component, OnInit } from '@angular/core';
import { FlipCardService } from './flip-card.service';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  public listaImagens: any;

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
      this.listaImagens = response
    );
  }

  toggle1() {
    this.toggleProperty1 = !this.toggleProperty1;
  }

  toggle2() {
    this.toggleProperty2 = !this.toggleProperty2;
  }

  toggle3() {
    this.toggleProperty3 = !this.toggleProperty3;
  }

  toggle4() {
    this.toggleProperty4 = !this.toggleProperty4;
  }

  toggle5() {
    this.toggleProperty5 = !this.toggleProperty5;
  }

  toggle6() {
    this.toggleProperty6 = !this.toggleProperty6;    
  }

  toggle7() {
    this.toggleProperty7 = !this.toggleProperty7;
  }

  toggle8() {
    this.toggleProperty8 = !this.toggleProperty8;
  }

  toggle9() {
    this.toggleProperty9 = !this.toggleProperty9;
  }

  toggle10() {
    this.toggleProperty10 = !this.toggleProperty10;
  }
  
  toggle11() {
    this.toggleProperty11 = !this.toggleProperty11;
  }

  toggle12() {
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
