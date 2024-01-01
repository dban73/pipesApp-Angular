import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css',
})
export class BasicsPageComponent {
  public nameLower: string = 'nestor';
  public nameUpper: string = 'NESTOR';
  public fullName: string = 'nEsTor BeNiTEz';
  public customDate: Date = new Date();
}
