import {Component, Self} from '@angular/core';
import {RoomsService} from "../rooms/services/rooms.service";

@Component({
  selector: 'hinv-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService]
})
export class EmployeeComponent {
  empName: string = 'John';

  constructor(@Self() private roomService: RoomsService) {
  }
}
