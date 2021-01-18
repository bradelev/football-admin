import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubsComponent } from './clubs.component';
import { ClubDetailsComponent } from './club-details/club-details.component';

const routes: Routes = [
  { path: '', component: ClubsComponent },
  { path: ':id', component: ClubDetailsComponent },
  { path: 'create', component: ClubDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubsRoutingModule { }
