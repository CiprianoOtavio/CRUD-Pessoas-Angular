import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisualizaRoutingModule } from './visualiza-routing.module';
import { VisualizaComponent } from './visualiza/visualiza.component';

@NgModule({
  declarations: [
    VisualizaComponent,
    VisualizaComponent
  ],
  imports: [
    CommonModule,
    VisualizaRoutingModule
  ]
})
export class VisualizaModule { }
