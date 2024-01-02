import { Component } from '@angular/core';

import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | '' | undefined = '';

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Robin', canFly: false, color: Color.red },
    { name: 'Daredevil', canFly: false, color: Color.red },
    { name: 'Greenlantern', canFly: true, color: Color.green },
  ];

  public colorMap = {
    '=0': 'red',
    '=1': 'black',
    '=2': 'blue',
    '=3': 'green',
  };
  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  changeorder(value: keyof Hero): void {
    this.orderBy = value;
  }
}
