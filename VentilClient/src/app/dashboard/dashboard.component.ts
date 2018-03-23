import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Controls, Logs } from '../model/dataStruct';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {

  private namesArray = [
    "Auto",
    "Off",
    "Standby",
    "Low",
    "Econo",
    "Comfort"
  ]

  @Input() logs: Logs[];
  @Input() controls: Controls[];
  private displayLog: Logs;
  private displayControls: string[];
  private logTime: string;

  //private mode: string;
  private gaugeType = "semi";
  private gaugeTypeVent = "full";


  constructor() {

  }

  ngOnInit() {
    
  }

  ngOnChanges() {
    if (this.logs)
      this.displayLog = this.logs[this.logs.length - 1]; 
    if (this.controls)
      this.setUpControlsToDisplay();
  }

  private setUpControlsToDisplay() {
    this.displayControls = [];
    for(let i in this.controls) {
      if (this.controls[i].variable == "gOpMode_Main") {
        this.displayControls[this.controls[i].variable] = this.namesArray[this.controls[i].value];
        let cExh = this.controls[Number(this.controls[i].value)-3];
        let cSup = this.controls[Number(this.controls[i].value)];
        this.displayControls['gSetManSetpFreqExh'] = Number(cExh.value) * cExh.multiplier
        this.displayControls['gSetManSetpFreqSup'] = Number(cSup.value) * cSup.multiplier
      }
    }
    //console.log(this.controls);
  }


}
