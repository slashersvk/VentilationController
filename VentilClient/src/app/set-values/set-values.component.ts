import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { Controls } from '../model/dataStruct';



@Component({
  selector: 'app-set-values',
  templateUrl: './set-values.component.html',
  styleUrls: ['./set-values.component.css']
})
export class SetValuesComponent implements OnInit {

  @Input() inputControls: Controls[];
  controls: Controls[];
  controlsData: Controls[]; //data na odoslanie
  reply: string;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    //this.controlsToSend = this.authService.controls;
      this.controls = new Array<Controls>();
      this.controlsData = this.inputControls; 
      for(let c in this.inputControls) {
        this.controls[this.inputControls[c].variable] = new Controls;
        this.controls[this.inputControls[c].variable].id = Number(c);
        this.controls[this.inputControls[c].variable].value = "" + (Number(this.inputControls[c].value) * Number(this.inputControls[c].multiplier));
        this.controls[this.inputControls[c].variable].multiplier = this.inputControls[c].multiplier;    
      }
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
        //this.localStorage.setItem('controls', this.controlsData ).subscribe(() => {});
      }
    )
  
    
  }
}
