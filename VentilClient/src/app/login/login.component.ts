import { Component, OnInit } from '@angular/core';
import { TokenParams } from '../model/tokenParams';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokenParam: TokenParams;
  username: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.tokenParam = new TokenParams();
  }

  doLogin(): void {

      this.authService.login(this.username, this.password).subscribe(
        data => {
          this.tokenParam.name = data.data.name;
          this.tokenParam.email = data.data.email;
          this.tokenParam.api_token = data.data.api_token;
          this.authService.AccessToken = this.tokenParam.api_token;
          this.router.navigate(['/dashboard']);


        }
      );
  }

}
