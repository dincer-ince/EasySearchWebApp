import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http:HttpClient,public router:Router){}

  url="https://easysearchserver.azurewebsites.net/api/";

  loading:boolean=false;
  error:string=""

  login(username:string,password:string){
    this.loading=true;
    var form = new loginModel()
    form.userName=username;
    form.password=password;
    this.http.post(this.url+"Login",form).subscribe((x:any)=>{
      localStorage.setItem("token",x.token)
      this.router.navigate(['']);
    },err=>{
      this.loading=false;
      this.error="Username or password is incorrect."
    })
  }

  register(username:string,password:string){
    this.loading=true;
    var form = new loginModel();
    form.userName=username;
    form.password=password;
    this.http.post(this.url+"Users",form).subscribe((x:any)=>{
      this.loading=false;
      if(!x.succeeded){
        this.error=x.errors[0].description;
      }else{
        this.error="";
      }
    })
  }
}
