import {AfterViewInit, Component, DoCheck, OnInit, SkipSelf, ViewChild} from '@angular/core';
import {Room, RoomList} from "./rooms";
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  UpperCasePipe
} from "@angular/common";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";
import {HeaderComponent} from "../header/header.component";
import {RoomsService} from "./services/rooms.service";

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    NgStyle,
    DatePipe,
    LowerCasePipe,
    UpperCasePipe,
    CurrencyPipe,
    JsonPipe,
    DecimalPipe,
    RoomsListComponent,
    HeaderComponent
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelName = 'Hilton Hotel'
  numberOfRooms = 10
  hideRooms = false
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  title: string = ''
  roomList: RoomList[] = []
  selectedRoom!: RoomList;

  constructor(@SkipSelf() private roomService: RoomsService) {
  }

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent

  ngAfterViewInit(): void {
    this.headerComponent.title = "Rooms View"
  }

  toggle() {
    this.hideRooms = !this.hideRooms
    this.title = "Rooms List"
  }

  ngDoCheck(): void {
    console.log("Inside ngDoCheck():")
  }

  ngOnInit(): void {
    this.roomList = this.roomService.getRoomsList()
  }

  selectRoom(room: RoomList) {
    console.log("room selected: ", room)
    this.selectedRoom = room
  }


  addRoom() {
    const room: RoomList =
      {
        roomNumber: 5,
        roomType: 'Ultra premium',
        amenities: 'AC, Wi-Fi, TV',
        price: 11500,
        photos: 'https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4',
        checkinTime: new Date('7-Feb-2024'),
        checkoutTime: new Date('17-Feb-2024'),
        rating: 3.2
      }
    // this.roomList.push(room)
    this.roomList = [...this.roomList, room]
  }


}
