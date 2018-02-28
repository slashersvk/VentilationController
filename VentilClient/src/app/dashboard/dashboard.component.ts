import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { TokenParams } from '../model/tokenParams';
import { AuthService } from '../auth.service';
import { Attributes } from '../model/dataStruct';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  attributes: Attributes[];

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    if (this.authService.AccessToken == "")
      this.router.navigate(['/']);

      Observable.interval(30000).switchMap(() => this.authService.getAttributes()).subscribe(
        data => {
          this.attributes = data;
        }
      )

  }

  redirectToEdit() {
    this.router.navigate(['/edit']);
  }


}
