import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, Http, HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { TokenParams } from './model/tokenParams';

@Injectable()
export class AuthService {

  private loginAPI = "http://localhost:8000/api/login";

  AccessToken: string = "";


  constructor(private http: Http) {

  }

  login(Username:string, Password: string): Observable<TokenParams> {
    var  headersForAPI = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    var data = "email="+ Username + "&password="+ Password;
    return this.http.post(this.loginAPI, data, { headers: headersForAPI }).map(res => res.json());
  }

}
