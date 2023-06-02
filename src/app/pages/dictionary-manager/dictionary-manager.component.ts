import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DictionaryModel } from 'src/app/models/models';
import { DocumentsService } from 'src/app/services/documents.service';
import { UserService } from 'src/app/services/user.service';
import { ViewportService } from 'src/app/services/viewport.service';
import { AddDictionaryDialogComponent } from 'src/app/shared/add-dictionary-dialog/add-dictionary-dialog.component';

@Component({
  selector: 'app-dictionary-manager',
  templateUrl: './dictionary-manager.component.html',
  styleUrls: ['./dictionary-manager.component.css']
})
export class DictionaryManagerComponent {

  constructor(public viewport:ViewportService,public service:UserService,private documentService:DocumentsService, private dialog:MatDialog){}

  addDictionary(userId:string){
    var dialogref = this.dialog.open(AddDictionaryDialogComponent);
    dialogref.componentInstance.formOutput.subscribe(x=>{
      x.userID=userId;
      this.documentService.postDictionary(x).subscribe(result=>{
        this.service.fetchUser();
        dialogref.close();
      },err=>{
        dialogref.componentInstance.isLoading=false;
      })
    })
  }

  deleteField(dictionary:DictionaryModel,index:number){
    dictionary.extraFieldDescription.splice(index,index+1);
  }

  updateFields(dictionary:DictionaryModel){
    this.documentService.putDictionaryFields(dictionary.id,dictionary.extraFieldDescription).subscribe(x=>{
      this.service.fetchUser();
    });
  }

  editTitle(id:number,name:string){
    this.documentService.putDictionaryTitle(id,name).subscribe(x=>{
      this.service.fetchUser();
    },err=>{

    })
  }

  editSearch(id:number,technique:number){
    this.documentService.putDictionarySearch(id,technique).subscribe(x=>{
      this.service.fetchUser();
    })
  }


  deleteDictionary(dictionary:DictionaryModel){
    this.documentService.deleteDictionary(dictionary.id).subscribe(x=>{
      this.service.fetchUser();
    })
  }

  

}
