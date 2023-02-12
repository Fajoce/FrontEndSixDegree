import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
enabled!:true;
@Input() opcion!: string;
textoPadre!: string;

ngOnInit(){
  textoPadre: 'Log In'
}
}
