import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, Http, HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { TokenParams } from './model/tokenParams';
import { Attributes, Reply } from './model/dataStruct';


@Injectable()
export class AuthService {

  private loginAPI = "http://localhost:8000/api/login";
  private attributesAPI =  "http://localhost:8000/api/attributes";

  AccessToken: string;


  constructor(private http: Http) {

  }

  login(Username:string, Password: string): Observable<TokenParams> {
    var  headersForAPI = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    var data = "email="+ Username + "&password="+ Password;
    return this.http.post(this.loginAPI, data, { headers: headersForAPI }).map(res => res.json());
  }

  getAttributes(): Observable<Attributes[]> {
    var  headersForAPI = new Headers();
    if (this.AccessToken) {
      headersForAPI.append('Authorization', 'Bearer ' + this.AccessToken);
    }
    return this.http.get(this.attributesAPI, {headers: headersForAPI}).map(res => res.json());
  }

  setAttributes(data: string): Observable<Reply> {
    var  headersForAPI = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    if (this.AccessToken) {
      headersForAPI.append('Authorization', 'Bearer ' + this.AccessToken);
    }
    return this.http.put(this.attributesAPI, data, { headers: headersForAPI }).map(res => res.json());
  }

}
