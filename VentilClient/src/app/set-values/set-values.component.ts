import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Controls } from '../model/dataStruct';

@Component({
  selector: 'app-set-values',
  templateUrl: './set-values.component.html',
  styleUrls: ['./set-values.component.css']
})
export class SetValuesComponent implements OnInit {

  controlsToSend: Controls;
  reply: string;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.controlsToSend = this.authService.controls;
  }

  sendData() {
    this.authService.setControls(this.controlsToSend).subscribe(
      data => {
       // console.log(this.data);
        this.reply = data;
        //console.log(this.reply);
      }
    )
  
    
  }
}
