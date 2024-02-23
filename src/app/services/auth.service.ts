import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { setToken, getToken } from "./local-storage.manager";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private create(data:any){
    return this.http.post<any>('url', data).pipe(
      tap(response => {
        // setToken(response.token);
        setToken(true)
      }));
  }
}
