import { Inject, Injectable } from '@angular/core';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';
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
}
