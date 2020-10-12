import * as CanvasJS from "../../node_modules/canvasjs/dist/canvasjs.min";

export class ChartAreaDemo {

    

  public displayChart(elementToDisplayChart): any{
        
    var myChart = new CanvasJS.Chart(elementToDisplayChart, {
      title: {
        text: "Chart 1"
      },
      axisX: {
        crosshair: {
          enabled: true
        }
      },
      axisY: {
        includeZero: false
      },
      data: [{
      type: "area",
      // ideal solution would be to map months (x-axis) to number of books (y-axis) read per month
      dataPoints: [
        { x: 10, y: 31 },
        { x: 20, y: 35 },
        { x: 30, y: 30 },
        { x: 40, y: 35 },
        { x: 50, y: 35 },
        { x: 60, y: 38 },
        { x: 70, y: 38 },
        { x: 80, y: 34 },
        { x: 90, y: 44 }
      ]
      }]
    });

    return myChart;

  }
}
