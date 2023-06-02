import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { UserModel } from '../models/models';


describe('UserService', () => {
  var users:UserModel[]=[{id:"",userName:"Dincer Ince",email:"dincer@gmail.com",dictionaries:[
    {id:1,name:"Posts",documents:[],numberOfDocuments:32,totalNumberOfWords:4021,extraFieldDescription:[
      "Likes","Dislikes","Edit"
    ]},
    {id:2,name:"Comments",documents:[],numberOfDocuments:32,totalNumberOfWords:4021,extraFieldDescription:[]},
    {id:3,name:"Blogs",documents:[],numberOfDocuments:32,totalNumberOfWords:4021,extraFieldDescription:[]}
  ],apiKeys:[
    {id:1,value:"LASLDkALSdkaFLAKs!1231$!%lasDAKFS!$34",createDate:1685522339,name:"Posts-read"},
    {id:1,value:"LASLDkALSdkaFLAKs!1231$!%lasDAKFS!$34",createDate:1685522339,name:"Posts-Write"}
  ]}];
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
