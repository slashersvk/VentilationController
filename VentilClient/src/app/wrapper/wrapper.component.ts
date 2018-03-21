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

  constructor(private router: Router, private authService: AuthService, protected localStorage: AsyncLocalStorage) {

  }

  ngOnInit() {
    this.authService.AccessToken = sessionStorage.getItem('access_token');
    //console.log(this.authService.AccessToken);
    this.controls = [];
    if (this.authService.AccessToken == "")
      this.router.navigate(['/']);

    this.authService.getControls().subscribe(
      data => {
        this.localStorage.setItem('controls', data ).subscribe(() => {});  
      }     
    );

    Observable.timer(0, 30000).switchMap(() => this.authService.getLogs()).subscribe(
      data => {
        console.log("ahoéj");
        //TODO: vlozit do localStorage
      }
    );
  }

  logout() {
    //TODO: unsubscribe getLogs
    sessionStorage.removeItem('access_token');
  }

}
