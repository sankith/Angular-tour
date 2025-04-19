import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url$ = new BehaviorSubject<any>({});
  currenturl$ = this.url$.asObservable();
 
  constructor() {}
 
  setUrl(Url: any) {
    this.url$.next(Url);
  }
}
