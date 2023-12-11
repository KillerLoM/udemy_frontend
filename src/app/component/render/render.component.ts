import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent {
  isLogin = false;
  constructor(private route: ActivatedRoute, private router: Router){

  }
  handleLogin(){
    this.isLogin = true;
    alert(1);
  }
  handlePreview(){
   this.router.navigate(['preview']);
  }
}
