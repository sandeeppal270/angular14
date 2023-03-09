import { Component, HostListener } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

@HostListener('click',['$event'])
  show(){
    alert('alert of hostlistner');
  }
  constructor(private _obj:Employee){
    _obj.show();


  }


}
