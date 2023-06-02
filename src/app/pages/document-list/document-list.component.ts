import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/operators';
import { DictionaryModel, DocumentModel } from 'src/app/models/models';
import { DocumentsService } from 'src/app/services/documents.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit{

  constructor(private router:Router){}

  @Input() documentList:DocumentModel[]=[];
  @Input() isSearch:boolean = false;

  regularColumns: string[] = ['id', 'title', 'numOfWords'];
  searchColumns:string[]=['id', 'title', 'numOfWords','similarity'];
  displayedColumns:string[] = this.regularColumns;
  dataSource:MatTableDataSource<DocumentModel>= new MatTableDataSource();

  @ViewChild(MatSort,{static:true}) sort!:MatSort;
  @ViewChild(MatPaginator,{static:true}) paginator!:MatPaginator;
  @ViewChild(MatInput,{static:true}) filter!:MatInput;

  ngOnInit(): void {
    if(this.isSearch) this.displayedColumns= this.searchColumns;
    this.dataSource.data=this.documentList;
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
    
  }

  applyFilter(text:string){
    this.dataSource.filter= text.trim().toLowerCase();
  }

  navigate(id:number){
    this.router.navigate(['Document/'+id]);
  }


}
