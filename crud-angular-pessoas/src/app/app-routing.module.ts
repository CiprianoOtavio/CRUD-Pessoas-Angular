import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'home'},
{path: 'home', loadChildren: () => import ('./home/home.module').then(m => m.HomeModule)},
{path: 'cadastra', loadChildren: () => import ('./cadastra/cadastra.module').then(m => m.CadastraModule)},
{path: 'atualiza', loadChildren: () => import ('./atualiza/atualiza.module').then(m => m.AtualizaModule)},
{path: 'visualiza', loadChildren: () => import ('./visualiza/visualiza.module').then(m => m.VisualizaModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
