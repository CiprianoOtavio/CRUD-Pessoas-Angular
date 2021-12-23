import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastraRoutingModule } from './cadastra-routing.module';
import { CadastraComponent } from './cadastra/cadastra.component';


@NgModule({
  declarations: [
    CadastraComponent
  ],
  imports: [
    CommonModule,
    CadastraRoutingModule
  ]
})
export class CadastraModule { }
