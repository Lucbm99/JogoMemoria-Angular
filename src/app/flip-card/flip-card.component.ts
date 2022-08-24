import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  toggleProperty1 = false;
  toggleProperty2 = false;
  toggleProperty3 = false;
  toggleProperty4 = false;
  toggleProperty5 = false;
  toggleProperty6 = false;
  toggleProperty7 = false;
  toggleProperty8 = false;
  toggleProperty9 = false;
  toggleProperty10 = false;
  toggleProperty11 = false;
  toggleProperty12 = false;

  constructor() { }

  ngOnInit() {
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
  
}
