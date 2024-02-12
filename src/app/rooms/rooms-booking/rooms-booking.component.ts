import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'hinv-rooms-booking',
  standalone: true,
  imports: [
    AsyncPipe,
  ],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss',
})
export class RoomsBookingComponent {
  constructor(private router: ActivatedRoute) {
  }

  roomId$ = this.router.paramMap
  .pipe(
    map((params) => params.get('roomId')),
  );

}
