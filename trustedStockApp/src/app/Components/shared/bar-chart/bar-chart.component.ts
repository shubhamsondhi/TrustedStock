import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  SimpleChange,
  ElementRef,
  ViewChild,
  Input
} from '@angular/core';
import { SharedChart } from '../shared.chart';
/* Imports */
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent extends SharedChart
  implements OnInit, AfterViewInit, OnChanges {
  /**
   * The Provided data.
   */
  @Input() dataProvider: any[];

  // Reference firstNameInput variable inside Component
  @ViewChild('amChart') amChartRef: ElementRef;
  /**
   * The almighty constructor.
   */
  constructor() {
    super('column');
  }
  ngOnInit() {}

  ngOnChanges() {
    if (this.dataProvider !== undefined) {
      const chart = am4core.create(
        this.amChartRef.nativeElement,
        am4charts.XYChart
      );

      const data = [];
      let value = 50;
      for (let i = 0; i < 300; i++) {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        date.setDate(i);
        value -= Math.round(
          (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
        );
        data.push({ date, value });
      }
      console.log(data);
      console.log(this.dataProvider);

      chart.data = this.dataProvider;
      chart.dateFormatter.inputDateFormat = 'YYYY-MM-DD';

      // Create axes
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.baseValue = 0;

      // Create series
      const series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'value';
      series.dataFields.dateX = 'date';
      series.tooltipText = '{value}';
      series.fillOpacity = 0.3;
      series.strokeWidth = 2;
      series.minBulletDistance = 15;

      let range = valueAxis.createSeriesRange(series);
      range.value = 0;
      range.endValue = 1000;
      range.contents.stroke = am4core.color('#FF0000');
      range.contents.fill = range.contents.stroke;

      // Drop-shaped tooltips
      series.tooltip.background.cornerRadius = 20;
      series.tooltip.background.strokeOpacity = 0;
      series.tooltip.pointerOrientation = 'vertical';
      series.tooltip.label.minWidth = 40;
      series.tooltip.label.minHeight = 40;
      series.tooltip.label.textAlign = 'middle';

      // Make bullets grow on hover
      const bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.strokeWidth = 2;
      bullet.circle.radius = 4;
      bullet.circle.fill = am4core.color('#fff');

      const bullethover = bullet.states.create('hover');
      bullethover.properties.scale = 1.3;

      // Make a panning cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = 'panXY';
      chart.cursor.xAxis = dateAxis;
      chart.cursor.snapToSeries = series;

      // Create a horizontal scrollbar with previe and place it underneath the date axis
      chart.scrollbarX = new am4charts.XYChartScrollbar();
      // chart.scrollbarX.series.push(series);
      chart.scrollbarX.parent = chart.bottomAxesContainer;

      // Create vertical scrollbar and place it before the value axis
      chart.scrollbarY = new am4core.Scrollbar();
      chart.scrollbarY.parent = chart.leftAxesContainer;
      chart.scrollbarY.toBack();
    }
  }
  /**
   * Use am chart service to make the chart.
   */
  ngAfterViewInit() {}
}
