import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'ginés';
  public nameUpper: string = 'GINÉS';
  public fullName: string = 'gInéS quEsadA';
  public customDate: Date = new Date();

}
