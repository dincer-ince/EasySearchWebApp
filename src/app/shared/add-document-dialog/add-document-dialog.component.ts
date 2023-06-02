import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PostDocument } from 'src/app/models/models';
import { ViewportService } from 'src/app/services/viewport.service';

@Component({
  selector: 'app-add-document-dialog',
  templateUrl: './add-document-dialog.component.html',
  styleUrls: ['./add-document-dialog.component.css']
})
export class AddDocumentDialogComponent implements AfterViewInit{

  constructor(public viewport:ViewportService){}


  @Input() set obs(obs:Observable<string[]>){
    this.extraFieldDescription=obs.pipe(tap(x=>{
      var arr=x.map(x=>"")
      this.extraFields=[...arr];
    }))
  }

  @Input() extraFieldDescription!:Observable<string[]>
  extraFields:string[]=[];
  isLoading=false;
  @Output() formOutput:EventEmitter<PostDocument> = new EventEmitter();

  ngAfterViewInit(): void {
    //this.extraFields=new Array<string>(this.extraFieldDescription.length).fill("")
  }

  submit(name:string,document:string){
    var form = new PostDocument();
    form.title=name;
    form.rawDocument=document
    form.extraFields=this.extraFields;
    this.isLoading=true;
    this.formOutput.emit(form);
  }

}
