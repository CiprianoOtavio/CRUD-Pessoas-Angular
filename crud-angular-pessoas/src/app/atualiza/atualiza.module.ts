import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtualizaRoutingModule } from './atualiza-routing.module';
import { AtualizaComponent } from './atualiza/atualiza.component';


@NgModule({
  declarations: [
    AtualizaComponent
  ],
  imports: [
    CommonModule,
    AtualizaRoutingModule
  ]
})
export class AtualizaModule { }
