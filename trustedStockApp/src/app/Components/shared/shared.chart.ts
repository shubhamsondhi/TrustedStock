import { Input } from '@angular/core';

export class SharedChart {

  /**
   * The valueField of chart.
   */
  @Input() valueField: string;
  /**
   * The categoryField of chart.
   */
  @Input() categoryField: string;
  /**
   * The Unique Id for every chart.
   */
  @Input() graphId: string;
  /**
   * The type of graph. ex: line, step,smoothedLine.
   */
  @Input() graphType;
  /**
   * if true give scrollbar on chart.
   */
  @Input() needChartScrollbar: boolean = false;

  /**
   * The almighty constructor.
   * @param _graphType
   */
  constructor(private _graphType: string) {
    this.graphType = _graphType;
  }

  /**
   * Create the configuration for amchart
   * @param dataProvider
   */
  makeOptions(dataProvider) {
    return {
      type: 'serial',
      theme: 'light',
      dataProvider: dataProvider,

      dataDateFormat: 'YYYY-MM-DD',
      balloon: {
        borderThickness: 1,
        shadowAlpha: 0
      },
      graphs: [
        {
          balloon: {
            drop: true,
            adjustBorderColor: false,
            color: '#ffffff'
          },
          valueField: this.valueField,
          type: this.graphType,
          fillAlphas: 0.2,
          bulletSize: 5,
          hideBulletsCount: 50,
          lineThickness: 2,
          lineColor: '#b0de09',
          negativeLineColor: '#67b7dc',
          title: 'red line',
          useLineColorForBulletBorder: true,
          balloonText: "<span style='font-size:18px;'>[[value]]</span>"
        }
      ],
      chartCursor: {
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        cursorAlpha: 0,
        zoomable: false,
        valueZoomable: true,
        valueLineAlpha: 0.5
      },
      chartScrollbar: this.needChartScrollbar ? {} : '',

      categoryField: this.categoryField,
      categoryAxis: {
        parseDates: true,
        dashLength: 1,
        minorGridEnabled: true
      },
      export: {
        enabled: false
      }
    };
  }
}
