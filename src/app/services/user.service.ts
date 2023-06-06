import { Injectable } from '@angular/core';
import { UserAuth, UserModel, loginModel, passwordUpdateDTO } from '../models/models';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../shared/login-dialog/login-dialog.component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { tap } from 'rxjs/internal/operators/tap';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private http:HttpClient,private dialog:MatDialog,private router:Router) { 
    var token = localStorage.getItem("token")
    if(token!=null){
      const rawClaims=atob(token.split('.')[1]);

      const expClaim= rawClaims.match(/"exp":([0-9]*)/gm)?.[0].slice(6);
      if(expClaim==null){
        this.loginDialog();
        return;
      }
      const exp = parseInt(expClaim)*1000;
      if(Date.now()>exp){
        this.loginDialog();
        return;
      }

      const userId= rawClaims.match(/"UserID":"([^"]*)"/gm)?.[0].slice(10).replace("\"","");
      if(userId){
        this.userId=userId;
        this.fetchUser();
      }
      
      
    }
    else{
      this.router.navigateByUrl("/login");
    }

  }

  userId="";

  // url:string="https://localhost:7041/api/";
  url="https://easysearchserver.azurewebsites.net/api/";

  user = new BehaviorSubject<UserModel|null>(null);

  dictionaries = this.user.pipe(map(x=>{
    if(x){
      return x.dictionaries;
    }
    else{
      return [];
    }
  }));

  private getHeader(){
    var options= {
      headers:new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("token")||""),
    }
    return options;
   }

  public fetchUser(){
    this.user.next(null);
    this.http.get<UserModel[]>(this.url+"Users/"+this.userId,{headers:new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("token")||"")})
    .subscribe(list=>{
      if(list.length>0){
        this.userId=list[0].id;
        this.user.next(list[0])
      }
      else{
        this.loginDialog();
      }

    },err=>{
      this.loginDialog();
    })
  }

  public login(request:loginModel){
    return this.http.post<UserAuth>(this.url+"Login",request).pipe(tap(res=>{

        localStorage.setItem("token",res.token);
        this.user.next(res.user);
        this.userId=res.user.id;

    }),catchError((x:UserAuth)=>{
      this.user.next(null);
      localStorage.removeItem("token");
      return throwError(x);
    })) ;
  }

  public  loginDialog(){
    const dialogref=this.dialog.open(LoginDialogComponent);
    dialogref.componentInstance.loginForm.subscribe(x=>{
      this.login(x).subscribe(x=>{
        dialogref.close();
      },err=>{
        dialogref.componentInstance.loading=false;
      });
    })
    
  }

  public retryLogin<T>(request:Observable<HttpResponse<T>>){
    return request.pipe(catchError(x=>{
      if(x.status == 401){
        this.loginDialog();
      }
      
      return throwError(x);
    }),map(x=>x.body as T));
  }

  public logOut(){
    this.user.next(null);
    this.userId="";
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }


  public postApiKeys(name:string){
    return this.http.post(this.url+"ApiKeys?user_id="+this.userId+"&name="+name,null,this.getHeader());
  }

  public deleteApiKey(keyId:number){
    return this.http.delete(this.url+"ApiKeys/"+keyId,this.getHeader())
  }

  public changePassword(form:passwordUpdateDTO){
    return this.http.put(this.url+"Users/changePassword/"+this.userId,form,this.getHeader());
  }





}
