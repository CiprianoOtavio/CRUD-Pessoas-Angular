import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizaComponent } from './visualiza/visualiza.component';

const routes: Routes = [
  {path: '', component: VisualizaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisualizaRoutingModule { }
