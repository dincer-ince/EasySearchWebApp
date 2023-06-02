import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/operators';
import { DictionaryModel, DocumentModel } from 'src/app/models/models';
import { DocumentsService } from 'src/app/services/documents.service';
import { UserService } from 'src/app/services/user.service';
import { ViewportService } from 'src/app/services/viewport.service';
import { AddDocumentDialogComponent } from 'src/app/shared/add-document-dialog/add-document-dialog.component';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent {
  constructor(public dialog:MatDialog,private route:ActivatedRoute, private service:DocumentsService,private userService:UserService,public viewport:ViewportService,private router:Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const dictionaryId=params['id'];
      this.getDictionary(dictionaryId)

      var request = this.service.getDictionary(dictionaryId);
      this.isSearch=false;
      if(params['query']!=null){
        var request = this.service.search(dictionaryId,params['query']);
        this.isSearch=true
      }

      this.fetchResults(request);
    })
  }

  isSearch:boolean=false;
  dictionary?:DictionaryModel

  _documentList!:Observable<DocumentModel[]>
  documentList:DocumentModel[]=[]

  fetchResults(request:Observable<DocumentModel[]>){
    this._documentList = request.pipe(tap(documents=>{
      this.documentList=documents;
    }))
  }

  getDictionary(dictionaryId:number){
    this.userService.user.asObservable().subscribe(user=>{
      if(user!=null) {
        this.dictionary=user.dictionaries.find(x=>x.id==dictionaryId)
      }
    })
  }

  search(text:string){
      if(text.length>2)
        this.router.navigate(['/Dictionary/'+this.dictionary?.id+'/search/'+text]);

      else this.router.navigate(['/Dictionary/'+this.dictionary?.id]);
      
  }

  addNew(){
    const dialogref=this.dialog.open(AddDocumentDialogComponent);

    dialogref.componentInstance.obs=of(this.dictionary!.extraFieldDescription);

    dialogref.componentInstance.formOutput.subscribe(x=>{
      x.dictionaryID=this.dictionary!.id;
      this.service.postDocument(x).subscribe(x=>{
        this.fetchResults(this.service.getDictionary(this.dictionary!.id));
        dialogref.close();
      },err=>{
        dialogref.componentInstance.isLoading=false;
      })
    })
  }
}
