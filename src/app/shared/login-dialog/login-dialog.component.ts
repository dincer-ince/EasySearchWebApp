import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { loginModel } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {

  constructor(){}

  errors:string[]=[];

  @Output() loginForm=new EventEmitter();

  loading=false;

  login(email:string,password:string){
    var form = new loginModel();
    form.userName=email;
    form.password=password
    this.loginForm.emit(form);
  }

}
