import { Component, EventEmitter, Output } from '@angular/core';
import { PostDictionary } from 'src/app/models/models';
import { DocumentsService } from 'src/app/services/documents.service';

@Component({
  selector: 'app-add-dictionary-dialog',
  templateUrl: './add-dictionary-dialog.component.html',
  styleUrls: ['./add-dictionary-dialog.component.css']
})
export class AddDictionaryDialogComponent {

  constructor(){}

  extraFields:string[]=[]

  isLoading=false;
  @Output() formOutput:EventEmitter<PostDictionary> = new EventEmitter();

  submit(name:string){
    var form = new PostDictionary();
    form.name=name;
    form.extraFieldDescription=this.extraFields;
    this.formOutput.emit(form);
  }

}
