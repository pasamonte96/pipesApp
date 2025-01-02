import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  // i18nSelect
  public name: string = 'Ginés';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeClient(): void {
    this.name = 'María';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Ginés', 'María', 'Juan', 'Pedro', 'Ana'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteCliente(): void {
    this.clients.pop();
  }

  //KeyValue Pipe
  public person = {
    name: 'Ginés',
    age: 30,
    address: 'Calle Falsa 123'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('Timer value', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos datos de la promesa');
      console.log('Promesa terminada');
    }, 3500);
  })

}
