import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgForOf, UpperCasePipe } from '@angular/common';
import { RoomList } from '../rooms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    LowerCasePipe,
    NgForOf,
    UpperCasePipe,
    NgClass,
    RouterLink,
  ],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  @Input() rooms: RoomList[] | null = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes:', changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy called');
  }
}
