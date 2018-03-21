import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Controls } from '../model/dataStruct';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-set-values',
  templateUrl: './set-values.component.html',
  styleUrls: ['./set-values.component.css']
})
export class SetValuesComponent implements OnInit {

  controls: Array<Controls>;
  controlsData: Controls;
  reply: string;

  constructor(private router: Router, private authService: AuthService, protected localStorage: AsyncLocalStorage) {

  }

  ngOnInit() {
    //this.controlsToSend = this.authService.controls;
    this.localStorage.getItem<Controls>('controls').subscribe((data) => {
      this.controls = new Array<Controls>();
      this.controlsData = data;
      for(let c in data) {
        this.controls[data[c].variable] = new Controls;
        this.controls[data[c].variable].id = Number(c);
        this.controls[data[c].variable].value = "" + (Number(data[c].value) * Number(data[c].multiplier));
        this.controls[data[c].variable].multiplier = data[c].multiplier;    
      }
      
  });
  }

  sendData() {
    for(let c in this.controls) {
      this.controlsData[this.controls[c].id].value = "" + Math.floor(Number(this.controls[c].value) 
      / this.controlsData[this.controls[c].id].multiplier);
    }
    //console.log(this.controlsData);
    
    this.authService.setControls(this.controlsData).subscribe(
      data => {
        this.reply = data;
      }
    )
  
    
  }
}
