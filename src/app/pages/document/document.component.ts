import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { combineLatest, combineLatestWith, map } from 'rxjs/operators';
import { DictionaryModel, DocumentModel, UserModel } from 'src/app/models/models';
import { DocumentsService } from 'src/app/services/documents.service';
import { UserService } from 'src/app/services/user.service';
import { ViewportService } from 'src/app/services/viewport.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {

  constructor(private route:ActivatedRoute, private service:DocumentsService,public userService:UserService,public viewPort:ViewportService,public router:Router){}

  detailsOpen:boolean=true

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.isSimilarDocuments=false;
      const documentId=params['id'];
      this._loaded=this.fetchResults(documentId);
    })
  }
  _loaded!:Observable<UserModel |null>
  document!:DocumentModel

  putLoading=false;

  _user = this.userService.user;
  _dictionaries= this._user.pipe(map(x=>x?.dictionaries))
  
  extraFieldsDescription:string[]=[];
  dictionary?:DictionaryModel;

  isTitleEdit:boolean=false;
  isContentEdit:boolean=false;
  isExtraFieldsEdit:boolean[]=[];

  isSimilarDocuments:boolean=false;
  _similarDocuments!:Observable<DocumentModel[]>

  fetchResults(documentId:number){
    return this.service.getDocument(documentId).pipe(combineLatestWith(this._user.asObservable())).pipe(tap(value=>{
      if(value[1] !=null){
        
        const dictionary = value[1].dictionaries.find(x=>value[0].dictionaryId==x.id);
        this.dictionary = dictionary;
        this.extraFieldsDescription = dictionary?.extraFieldDescription || [];
        this.setupExtraFields()
        this.document = value[0];
      }
    }),map(x=>x[1]))
  }

  setupExtraFields(){
    this.isExtraFieldsEdit = this.extraFieldsDescription.map(x=>false);
  }

  deleteDocument(){
    this.service.deleteDocument(this.document.id).subscribe(x=>{
      this.router.navigate(['/Dictionary/'+this.document.dictionaryId])
    })
  }

  similarDocuments(){
    if(this.isSimilarDocuments) return;
    this._similarDocuments=this.service.similarDocuments(3,this.document.id);
    this.isSimilarDocuments=true;
  }

  editDictionary(id:number){
    this.putLoading=true;
    this.service.putDocumentDictionary(this.document.id,id).subscribe(x=>{
      this._loaded = this.fetchResults(this.document.id);
      this.putLoading=false;
    })
  }

  editTitle(title:string){
    this.putLoading=true;
    this.service.putDocumentTitle(this.document.id,title).subscribe(x=>{
      this._loaded = this.fetchResults(this.document.id);
      this.putLoading=false;
    })
  }

  editContent(content:string){
    this.putLoading=true;
    this.service.putDocumentRawDocument(this.document.id,content).subscribe(x=>{
      this._loaded = this.fetchResults(this.document.id);
      this.putLoading=false;
    })

  }

  editField(index:number,field:string){
    this.putLoading=true;
    this.service.putDocumentField(this.document.id,index,field).subscribe(x=>{
      this._loaded = this.fetchResults(this.document.id);
      this.putLoading=false;
    })
  }


  

}
