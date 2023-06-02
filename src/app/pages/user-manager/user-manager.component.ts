import { Component } from '@angular/core';
import { passwordUpdateDTO } from 'src/app/models/models';
import { UserService } from 'src/app/services/user.service';
import { ViewportService } from 'src/app/services/viewport.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent {
  constructor(public viewport:ViewportService,public service:UserService){}

  error:string=""

  editName(userId:string,name:string){

  }

  editEmail(userId:string,email:string){

  }

  changePassword(old:string,new1:string,new2:string){
    if(old==new1){
      this.error="Old password can not be the same as the new one";
      return;
    } 
    if(new1!=new2) {
      this.error="Passwords do not match";
      return;
    }
    var form=new passwordUpdateDTO;
    form.currentPassword=old;
    form.newPassword=new1;
    this.service.changePassword(form).subscribe(x=>{
      this.service.fetchUser();
    })
    
  }
}
