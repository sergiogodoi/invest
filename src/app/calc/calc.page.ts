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

  public calc = {capital : null, taxa : null, tempo : null, aporte : null};
  public montante = null;
  public juros = null;
  public investido = null;

  calculate() {
    let i = Math.round((this.calc.taxa / 12) * 100) / 100, c = parseFloat(this.calc.capital), t = this.calc.tempo;

    let result = c * Math.pow(1+((i)/100), t);
    let mensal = this.calc.aporte * (Math.pow(1+(i/100), t) - 1) / (i/100);

    this.montante = result + mensal;
    this.investido = this.calc.aporte * t;
    this.investido += c;
    this.juros = this.montante - this.investido;
  }

  applyMask(event) {
    console.log(event);
    /*
    let value = event.replace(",", "").replace(".", "").padStart(3, "0");

    let formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });

    value = value.match(/(\d{1,})+(\d{2})$/).slice(1).join('.');
    this.calc.capital = formatter.format(value).slice(3);
    console.log(this.calc.capital);
    */
  }
}
