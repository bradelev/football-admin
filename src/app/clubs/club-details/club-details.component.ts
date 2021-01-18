import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ClubsService } from '../services/clubs.service';

@Component({
  selector: 'app-club-details',
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.scss']
})
export class ClubDetailsComponent implements OnInit {
  clubForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private clubService: ClubsService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  get name() { return this.clubForm.get('name'); }
  get country() { return this.clubForm.get('country'); }
  get reputation() { return this.clubForm.get('reputation'); }
  get economy() { return this.clubForm.get('economy'); }

  createForm(): void {
    this.clubForm = this.fb.group({
      'name': new FormControl('', Validators.required),
      'country': new FormControl('', Validators.required),
      'reputation': new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
      'economy': new FormControl('', Validators.required),
    })
  }

  submitForm(): void {
    if (!this.clubForm.invalid) {
      this.clubService.createClub(this.clubForm.value);
    }
  }

}
