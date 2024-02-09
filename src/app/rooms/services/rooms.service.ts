import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {

  constructor(
    @Inject(APP_SERVICE_CONFIG) serviceConfig: AppConfig,
    private httpClient: HttpClient,
  ) {
    console.log('current environment:', serviceConfig.apiEndpoint);
  }

  getRoomsList() {
    return this.httpClient.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.httpClient.post<RoomList[]>('/api/rooms', room);
  }

  editRoom(room: RoomList) {
    return this.httpClient.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.httpClient.delete<RoomList[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      { reportProgress: true },
    );
    return this.httpClient.request(request);
  }
}
