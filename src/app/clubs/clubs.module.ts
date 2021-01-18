import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubsRoutingModule } from './clubs-routing.module';
import { ClubsComponent } from './clubs.component';
import { ClubDetailsComponent } from './club-details/club-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ClubsComponent, ClubDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClubsRoutingModule,
  ]
})
export class ClubsModule { }
