import { Component } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public userService:UserService){}

  user = this.userService.user.pipe(tap(user=>{
    if(user==null) return;
    user.dictionaries.forEach(dictionary=>{
      this.numberOfDocuments+=dictionary.numberOfDocuments;
      this.numberOfWords+=dictionary.totalNumberOfWords; 
    })
  }))

  numberOfDocuments=0;
  numberOfWords=0;
}
