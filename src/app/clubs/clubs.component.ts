import { Component, OnInit } from '@angular/core';
import { ClubsService } from './services/clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  clubs: any;

  constructor(private clubsService: ClubsService) { }

  ngOnInit(): void {
    this.clubs = this.clubsService.getAll()
  }

}
