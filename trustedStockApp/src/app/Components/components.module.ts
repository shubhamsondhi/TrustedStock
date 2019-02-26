import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaComponent } from './alpha/alpha.component';
import { ServiceModule } from '../Services/service.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AlphaComponent],
  imports: [CommonModule, ServiceModule, SharedModule],
  exports: [AlphaComponent]
})
export class ComponentsModule {}
