import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Attributes, Reply } from '../model/dataStruct';

@Component({
  selector: 'app-set-values',
  templateUrl: './set-values.component.html',
  styleUrls: ['./set-values.component.css']
})
export class SetValuesComponent implements OnInit {

  attributes: Attributes[];
  reply: Reply;
  data: string;

  constructor(private router: Router, private authService: AuthService) {

  }

  ngOnInit() {

    this.authService.getAttributes().subscribe(
      data => {
        this.attributes = data;
        console.log(this.attributes);
      }
    )
  }

  sendData() {
    console.log(this.attributes);
    this.authService.setAttributes(this.data).subscribe(
      data => {
        this.reply = data;
      }
    )
  }

}
