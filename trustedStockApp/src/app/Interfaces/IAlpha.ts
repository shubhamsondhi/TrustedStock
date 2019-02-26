export interface IAlpha {
  'Meta Data': MetaData;
  'Time Series (Daily)': TimeSeries;
  'Time Series (5min)': TimeSeries;
  'Weekly Time Series': TimeSeries;
  'Weekly Adjusted Time Series': TimeSeries;
  'Monthly Adjusted Time Series': TimeSeries;
  'Monthly Time Series': TimeSeries;
}

export interface TimeSeries {
  [DateTime: string]: TimeSerieDetail;
}

interface TimeSerieDetail {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

interface MetaData {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Output Size': string;
  '5. Time Zone': string;
}
