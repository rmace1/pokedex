import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedetailsComponent } from './pages/pokedetails/pokedetails.component';
import { PokesearchComponent } from './pages/pokesearch/pokesearch.component';

const routes: Routes = [
  {path: 'pokedetails', component: PokedetailsComponent},
  {path: '', component: PokesearchComponent},
  {path: '**', component: PokesearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
