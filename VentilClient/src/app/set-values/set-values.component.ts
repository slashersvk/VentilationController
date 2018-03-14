import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Attributes } from '../model/dataStruct';

@Component({
  selector: 'app-set-values',
  templateUrl: './set-values.component.html',
  styleUrls: ['./set-values.component.css']
})
export class SetValuesComponent implements OnInit {

  attributes: Attributes[];;
  reply: string;
  data: string[];

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.getAttributes().subscribe(
      data => {
        this.attributes = data;
        //console.log(this.attributes);
      }
    )
  }

  sendData() {
    this.data = [];
    for (let attr of this.attributes) {
      this.data[attr.variable] = attr.value;
    }
    this.authService.setAttributes(this.attributes).subscribe(
      data => {
       // console.log(this.data);
        this.reply = data;
        //console.log(this.reply);
      }
    )
  
    
  }
}
