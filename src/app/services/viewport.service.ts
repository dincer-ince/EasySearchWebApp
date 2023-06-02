import {  Injectable, OnDestroy } from '@angular/core';

import { tap } from 'rxjs/internal/operators/tap';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Injectable({
  providedIn: 'root'
})
export class ViewportService implements OnDestroy {

  constructor() {
    var width=window.visualViewport?.width;
    if(width){
      this.isDesktopBool=width>992
      this._isDesktop.next(this.isDesktopBool);
    }

    this.OnResize.subscribe();
   }
  
  private isDesktopBool:boolean=false;
  private _isDesktop:BehaviorSubject<boolean>= new BehaviorSubject(false);

  //Subscribe to the observable to reflect changes to window size
  public isDesktop:Observable<boolean> = this._isDesktop.asObservable();

  protected destroyed$: Subject<void> = new Subject();

    OnResize=fromEvent(window, 'resize').pipe(
      takeUntil(this.destroyed$),
      tap((e:any)=>{
      var isDesktop:boolean = e.target.innerWidth>992;
      if(isDesktop==this.isDesktopBool) return;
      this.isDesktopBool=isDesktop;
      this._isDesktop.next(isDesktop);
    
    }))

    ngOnDestroy(): void {
      this.destroyed$.next();
    }
}
