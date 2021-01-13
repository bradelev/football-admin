import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'players',
    loadChildren: () => import('./players/players.module').then(
      mod => mod.PlayersModule
    )
  },
  {
    path: 'clubs',
    loadChildren: () => import('./clubs/clubs.module').then(
      mod => mod.ClubsModule
    )
  },
  {
    path: '**',
    redirectTo: 'players'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
