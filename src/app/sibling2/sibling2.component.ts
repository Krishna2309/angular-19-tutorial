import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sibling2',
  imports: [],
  templateUrl: './sibling2.component.html',
  styleUrl: './sibling2.component.scss',
})
export class Sibling2Component {
  @Input() sibling2Property: string = '';

  @Output() sibling2Event = new EventEmitter<any>();

  onSend(data: any) {
    this.sibling2Event.emit(data);
  }
}
