import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaService } from './Alpha.service';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule, CommonModule],
  providers: [AlphaService, HttpClient]
})
export class ServiceModule {}
