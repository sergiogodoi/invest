import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.page.html',
  styleUrls: ['./calc.page.scss'],
})
export class CalcPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  calc = {capital : null, taxa : null, tempo : null};
  result = null;

  calculate() {
    let result = this.calc.capital * Math.pow(1+(this.calc.taxa/100), this.calc.tempo);

    this.result = result;
  }
}
