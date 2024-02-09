import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  config: any;

  constructor(private httpClient: HttpClient) {
  }

  init() {
    return this.httpClient
    .get('/assets/config.json')
    .pipe(tap(config => this.config = config));
  }
}
