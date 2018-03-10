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
  vent: Attributes[];
  mode: string;
  gaugeType = "semi";
  gaugeTypeVent = "full";


  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.mode = "";
    this.vent = [];
    this.vent[0] = new Attributes();
    this.vent[1] = new Attributes();
    Observable.timer(0, 30000).switchMap(() => this.authService.getAttributes()).subscribe(
      data => {
        this.attributes = data;
        switch (this.attributes[12].value) {
          case "0":
            this.mode = "Auto";
            break;
          case "1":
            this.mode = "Off";
            break;
          case "2":
            this.mode = "Standby";
            break;
          case "3":
            this.mode = "Low";
            this.vent[0] = this.attributes[3];
            this.vent[1] = this.attributes[6];
            break;
          case "4":
            this.mode = "Econo";
            this.vent[0] = this.attributes[4];
            this.vent[1] = this.attributes[7];
            break;
          case "5":
            this.mode = "Comfort";
            this.vent[0] = this.attributes[5];
            this.vent[1] = this.attributes[8];
            break;
          default:
            this.mode = "";
            break;
        }
      }
    )

  }



}
