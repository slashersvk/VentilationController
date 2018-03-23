import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Rx';
import { Controls, Logs } from '../model/dataStruct';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {


  controls: Controls[];
  logs: Logs[];


  private showView = 0;
  private logTime: string;

  constructor(private router: Router, private authService: AuthService, protected localStorage: AsyncLocalStorage) {

  }

  ngOnInit() {
    this.authService.AccessToken = sessionStorage.getItem('access_token');
   
    if (this.authService.AccessToken == "")
      this.router.navigate(['/']);
    
    this.getControls();
    this.getLogs();
  }

  logout() {
    //TODO: unsubscribe getLogs
    sessionStorage.removeItem('access_token');
  }

  changeView(id) {
    this.showView = id;
  }

  private getLogs() {
    this.localStorage.getItem<Logs>('logs').subscribe((log) => {
      if (log) {
        this.logs = log;
      } else {
        this.logs = [];
      }
      this.logTime = this.getMostRecentLogTime();
      Observable.timer(0, 3000).switchMap(() => this.authService.getLogs(this.logTime)).subscribe(
        data => {
          //console.log(data);
          for (let d in data) {
            this.logs.push(data[d]);
          }
          this.logTime = this.getMostRecentLogTime();
          this.localStorage.setItem('logs', this.logs).subscribe(() => { });
          //this.router.navigate(['app/edit']);
        });
    });
  }

  private getControls() {
    this.authService.getControls().subscribe(
      data => {
        this.controls = new Array<Controls>();
        this.controls = data;
        //this.localStorage.setItem('controls', data).subscribe(() => { });       
      }
    );
  }

  private getMostRecentLogTime() {
    if (this.logs.length == 0) {
      return "1.1.1970 00:00:00";
    }
    return this.logs[this.logs.length - 1].created_at;
  }


}
