import { Component, OnInit } from '@angular/core';
import { AlphaService } from 'src/app/Services/Alpha.service';
import { Alpha } from 'src/app/Models/Alpha/Alpha';
import { IAlpha } from 'src/app/Interfaces/IAlpha';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  constructor(public alphaService: AlphaService) {}
  ngOnInit() {
    // https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo
    this.alphaService
      .StockTimeSeries('TIME_SERIES_DAILY', 'MSFT', '5min', 'full')
      .subscribe(
        result => {
          // console.log(result as Alpha);
          const re = result as IAlpha;
          console.log(re['Meta Data']);
        },
        err => {
          console.log(err);
        }
      );
  }

    /**
   * Create random data for amchart
   */
  makeRandomDataProvider() {
    const dataProvider = new Array<any>();
    const firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 150);
    let visits = 40;
    let b = 0.6;
    for (let i = 0; i < 10; i++) {
      // we create date objects here. In your data, you can have date strings
      // and then set format of your dates using chart.dataDateFormat property,
      // however when possible, use date objects, as this will speed up chart rendering.
      const newDate = new Date(firstDate);
      newDate.setDate(newDate.getDate() + i);
      if (i > 80) {
        b = 0.4;
      }
      visits += Math.round((Math.random() < b ? 1 : -1) * Math.random() * 10);
      dataProvider.push({
        date: newDate,
        value: visits
      });
    }
    return dataProvider;
  }
}
