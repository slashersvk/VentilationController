import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { TokenParams } from '../model/tokenParams';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayToken: string;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    if (this.authService.AccessToken == "")
      this.router.navigate(['/']);
  }

}
