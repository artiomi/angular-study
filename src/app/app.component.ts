import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from './employee/employee.component';
import { localStorageToken } from './localstorage.token';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RouterOutlet, RoomsComponent, ContainerComponent, EmployeeComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  constructor(@Inject(localStorageToken) private localStorage: Storage) {
  }

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  // @ViewChild('user', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  //
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 123;
  // }
}
