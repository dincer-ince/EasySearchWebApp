import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ViewportService } from 'src/app/services/viewport.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(){}

  @Output() toggleSide: EventEmitter<any> = new EventEmitter();
  toggleSideBar(){

    this.toggleSide.emit();
  }

}
