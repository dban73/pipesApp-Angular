import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css',
})
export class UncommonPageComponent {
  // public i18n Select
  public name: string = 'Nestor';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeClient(): void {
    this.name = 'Cristiana';
    this.gender = 'female';
  }
  // i18nPlural
  public clients: string[] = [
    'Maria',
    'Pedro',
    'Juan',
    'Luis',
    'Eduardo',
    'Melissa',
  ];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos # cliente esperando',
    other: 'tenemos # clientes esperando',
  };
  deleteClient() {
    this.clients.shift();
  }

  // key value pipe
  public person = {
    name: 'Nestor',
    age: 40,
    address: 'Lima, Peru',
  };

  // async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data from promise');
    }, 3500);
  });
}
