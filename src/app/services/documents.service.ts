import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserService } from './user.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/internal/operators/map';
import { DictionaryModel, DocumentModel, PostDictionary, PostDocument } from '../models/models';
import { delay, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http:HttpClient,private userService:UserService) { }

  private getHeader(){
    var options= {
      headers:new HttpHeaders().set("Authorization","Bearer "+localStorage.getItem("token")||""),
      observe:'response' as const
    }
    return options;
   }

  // url:string="https://localhost:7041/api/";
  url="https://easysearchserver.azurewebsites.net/api/";

  

  public getDictionary(dictionaryId:number){
    return this.userService.retryLogin(this.http.get<DocumentModel[]>(this.url+"Documents/list/"+dictionaryId,this.getHeader()));
  }

  public getDocument(documentId:number){
    return this.userService.retryLogin(this.http.get<DocumentModel>(this.url+"Documents/"+documentId,this.getHeader()));
  }

  public search(dictionaryId:number,query:string){
    return this.userService.retryLogin(this.http.get<DocumentModel[]>(this.url+"Documents/search/"+dictionaryId+"/"+query,this.getHeader()));
  }

  public postDictionary(form:PostDictionary){
    return this.userService.retryLogin(this.http.post(this.url+"Dictionaries",form,this.getHeader()));
  }
  public postDocument(form:PostDocument){
    return this.userService.retryLogin(this.http.post(this.url+"Documents",form,this.getHeader()));
  }

  public putDictionaryTitle(dictionaryId:number,name:string){
    return this.userService.retryLogin(this.http.put(this.url+"Dictionaries/changeDictionaryTitle?id="+dictionaryId+"&name="+name,null,this.getHeader()));
  }

  public putDictionaryFields(dictionaryId:number,fields:string[]){
    return this.userService.retryLogin(this.http.put(this.url+"Dictionaries/changeDictionaryFieldDescription?id="+dictionaryId,fields,this.getHeader())); 
  }

  public putDictionarySearch(dictionaryId:number,technique:number){
    return this.userService.retryLogin(this.http.put(this.url+"Dictionaries/changeDictionarySearch?dictionaryId="+dictionaryId+"&technique="+technique,null,this.getHeader()));
  }

  public deleteDictionary(dictionaryId:number){
    return this.userService.retryLogin(this.http.delete(this.url+"Dictionaries/"+dictionaryId,this.getHeader()));
  }

  public similarDocuments(length:number,documentId:number){
    return this.userService.retryLogin(this.http.get<DocumentModel[]>(this.url+"Documents/similarDocuments/"+length+"/"+documentId,this.getHeader()));
  }

  public putDocumentDictionary(documentId:number,dictionaryId:number){
    return this.userService.retryLogin(this.http.put(this.url+"Documents/changeDocumentDictionary?document_id="+documentId+"&dictionary_id="+dictionaryId,null,this.getHeader())); 
  }

  public putDocumentTitle(documentId:number,title:string){
    return this.userService.retryLogin(this.http.put(this.url+"Documents/changeDocumentTitle?document_id="+documentId+"&title="+title,null,this.getHeader())); 
  }

  public putDocumentRawDocument(documentId:number,rawDocument:string){
    return this.userService.retryLogin(this.http.put(this.url+"Documents/changeDocumentRawDocument",{id:documentId,text:rawDocument},this.getHeader())); 
  }

  public putDocumentField(documentId:number,index:number,field:string){
    return this.userService.retryLogin(this.http.put(this.url+"Documents/editDocumentField?document_id="+documentId+"&index="+index+"&text="+field,null,this.getHeader())); 
  }

  public deleteDocument(documentId:number){
    return this.userService.retryLogin(this.http.delete(this.url+"Documents/"+documentId,this.getHeader())); 
  }





}
