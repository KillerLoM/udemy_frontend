import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'udemy-frontend';
  isLogin = false;
  constructor(){}
  handleLogin(){
    this.isLogin = true;
    alert(1);
  }
}
