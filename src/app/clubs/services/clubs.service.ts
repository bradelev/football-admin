import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  clubs: any = []

  constructor() { }

  getAll() {
    return this.clubs
  }

  createClub(values: any): void {
    console.log(values)
    this.clubs.push(values)
  }
}
