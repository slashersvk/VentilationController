import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.AccessToken = sessionStorage.getItem('access_token');
    //console.log(this.authService.AccessToken);
    if (this.authService.AccessToken == "")
      this.router.navigate(['/']);

    this.authService.getControls().subscribe(
      data => {
        //TODO: vlozit do localStorage
      }
    );

    Observable.timer(0, 30000).switchMap(() => this.authService.getLogs()).subscribe(
      data => {
        //TODO: vlozit do localStorage
      }
    );
  }

  logout() {
    //TODO: unsubscribe getLogs
    sessionStorage.removeItem('access_token');
  }

}
