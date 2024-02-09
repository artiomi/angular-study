import {Inject, Injectable} from '@angular/core';
import {RoomList} from "../rooms";
import {APP_SERVICE_CONFIG} from "../../AppConfig/appconfig.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) serviceConfig: AppConfig) {
    console.log("current environment:", serviceConfig.apiEndpoint)
  }

  getRoomsList(): RoomList[] {
    return [
      {
        roomNumber: 3,
        roomType: 'Deluxe',
        amenities: 'AC, Wi-Fi, TV',
        price: 500,
        photos: 'https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4',
        checkinTime: new Date('7-Feb-2024'),
        checkoutTime: new Date('17-Feb-2024'),
        rating: 4.2
      },
      {
        roomNumber: 12,
        roomType: 'Economy',
        amenities: 'Wi-Fi',
        price: 150,
        photos: 'https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4',
        checkinTime: new Date('17-Jan-2024'),
        checkoutTime: new Date('05-Feb-2024'),
        rating: 3.99
      },
      {
        roomNumber: 21,
        roomType: 'Premium',
        amenities: 'AC, Wi-Fi, TV',
        price: 1500,
        photos: 'https://unsplash.com/photos/white-and-blue-cloudy-sky-f5_lfi2S-d4',
        checkinTime: new Date('23-Jan-2024'),
        checkoutTime: new Date('13-Feb-2024'),
        rating: 4.678
      }
    ]
  }
}
