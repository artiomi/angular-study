import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { FormsModule } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe,
    NgIf,
  ],
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss',
})


export class RoomsAddComponent {
  room: RoomList = {
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  };
  successMessage: string = '';

  constructor(private roomsService: RoomsService) {

  }


  addRoom() {
    console.log('My room:', this.room);
    this.roomsService
    .addRoom(this.room)
    .subscribe(result => this.successMessage = 'New room was added');
  }
}
