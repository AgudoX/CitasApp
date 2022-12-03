import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritasComponent } from './components/favoritas/favoritas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'favoritas', component: FavoritasComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
