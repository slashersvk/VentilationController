import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Headers, Http, HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { TokenParams } from './model/tokenParams';
import { Controls, Logs } from './model/dataStruct';


@Injectable()
export class AuthService {

  private loginAPI = "http://localhost:8000/api/login";
  private controlsAPI =  "http://localhost:8000/api/controls";
  private logsAPI = "http://localhost:8000/api/logs";

  AccessToken: string;
  controls: Controls;
  logs: Logs[];

  constructor(private http: Http) {

  }

  login(Username:string, Password: string): Observable<TokenParams> {
    var  headersForAPI = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    var data = "email="+ Username + "&password="+ Password;
    return this.http.post(this.loginAPI, data, { headers: headersForAPI }).map(res => res.json());
  }

  getControls(): Observable<Controls[]> {
    var  headersForAPI = new Headers();
    if (this.AccessToken) {
      headersForAPI.append('Authorization', 'Bearer ' + this.AccessToken);
    }
    return this.http.get(this.controlsAPI, {headers: headersForAPI}).map(res => res.json());
  }

  setControls(data: Controls[]): Observable<string> {
    var  headersForAPI = new Headers({'Content-Type':'application/json'});
    if (this.AccessToken) {
      headersForAPI.append('Authorization', 'Bearer ' + this.AccessToken);
    }
    var sData = JSON.stringify(data);
    //console.log(sData);
    return this.http.post(this.controlsAPI, data, { headers: headersForAPI }).map(res => res.json());
  }

  getLogs(logTime: string): Observable<Logs[]> {
    var  headersForAPI = new Headers({'Content-Type':'application/json'});
    if (this.AccessToken) {
      headersForAPI.append('Authorization', 'Bearer ' + this.AccessToken);
    }
   
    let data = {updated_at: logTime};
    return this.http.post(this.logsAPI, data, { headers: headersForAPI }).map(res => res.json());
  }

}
