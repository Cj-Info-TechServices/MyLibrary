import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartAreaDemo } from '../chart-area-demo';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit, AfterViewInit {

  chartAreaObj: ChartAreaDemo;

  constructor() {
    this.chartAreaObj = new ChartAreaDemo();
  }

  ngOnInit(): void {
    //document.getElementById("myChart").innerHTML = "Chart goes here!!";
  }

  // event fired after dashboard view is initialized
  ngAfterViewInit(): void {
    this.chartAreaObj.displayChart("myAreaChart").render();
  }

}
