import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { TokenParams } from '../model/tokenParams';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  mode: string;
  gaugeType = "semi";
  gaugeTypeVent = "full";


  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    
  }



}
