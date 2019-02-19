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

  calc = {capital : null, taxa : null, tempo : null, aporte : null};
  result = null;

  calculate() {
    let i = Math.round((this.calc.taxa / 12) * 100) / 100, c = this.calc.capital, t = this.calc.tempo;

    let result = c * Math.pow(1+((i)/100), t);
    let mensal = this.calc.aporte * (Math.pow(1+(i/100), t) - 1) / (i/100);

    this.result = result + mensal;
  }
}