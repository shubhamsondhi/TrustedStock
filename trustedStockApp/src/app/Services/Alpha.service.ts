import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiSharedService } from './ApiShared.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlphaService {
  ApiKey = 'SQQ3NUEJL23K75JF';
  API_URL = 'https://www.alphavantage.co/query?';
  constructor(private http: HttpClient, private apiService: ApiSharedService) {}

  StockTimeSeries(
    functionName:
      | 'TIME_SERIES_MONTHLY'
      | 'TIME_SERIES_MONTHLY_ADJUSTED'
      | 'TIME_SERIES_WEEKLY_ADJUSTED'
      | 'TIME_SERIES_WEEKLY'
      | 'TIME_SERIES_DAILY_ADJUSTED'
      | 'TIME_SERIES_DAILY'
      | 'TIME_SERIES_INTRADAY',
    symbol: string,
    interval: '1min' | '5min' | '15min' | '30min' | '60min',
    outputSize: 'compact' | 'full',
    datatype?: 'json' | 'csv'
  ) {
    return this.http
      .get<any>(
        `${
          this.API_URL
        }function=${functionName}&symbol=${symbol}&interval=${interval}&apikey=${
          this.ApiKey
        }`
      )
      .pipe(catchError(this.apiService.handleError));
  }
  QuoteEndPointSock(
    functionName: string,
    keyword: string,
    datatype?: 'json' | 'csv'
  ) {}
  SearchEndPointSock(
    functionName: string,
    keyword: string,
    datatype?: 'json' | 'csv'
  ) {}
}
