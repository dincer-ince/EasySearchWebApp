import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ViewportService } from 'src/app/services/viewport.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sideBarOpen=false;
  constructor(public viewPort:ViewportService,public userService:UserService){
  }

  ngOnInit(): void {
  }
}
