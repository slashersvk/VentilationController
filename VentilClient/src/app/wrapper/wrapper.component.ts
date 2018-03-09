import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
  }

  logout() {
    sessionStorage.removeItem('access_token');
  }

}
