import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ViewportService } from 'src/app/services/viewport.service';

@Component({
  selector: 'app-api-key-manager',
  templateUrl: './api-key-manager.component.html',
  styleUrls: ['./api-key-manager.component.css']
})
export class ApiKeyManagerComponent {

  constructor(public viewport:ViewportService,public service:UserService){}

  isAddNew=false;

  addNewKey(name:string){
    var request = this.service.postApiKeys(name).subscribe(x=>{
      this.service.fetchUser();
      request.unsubscribe();
    });
  }

  deleteKey(keyId:number){
    var request = this.service.deleteApiKey(keyId).subscribe(x=>{
      this.service.fetchUser();
      request.unsubscribe();
    });
  }
}
