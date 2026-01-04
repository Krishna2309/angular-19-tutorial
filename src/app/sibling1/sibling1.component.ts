import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  imports: [],
  templateUrl: './sibling1.component.html',
  styleUrl: './sibling1.component.scss',
})
export class Sibling1Component {
  @Input() sibling1Property: string = '';

  @Output() sibling1Event = new EventEmitter<string>();

  onSubmit(data: any) {
    this.sibling1Event.emit(data);
  }
}
