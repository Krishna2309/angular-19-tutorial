import {
  ChangeDetectionStrategy,
  Component,
  effect,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent {
  // normalCounter: number = 0;
  //counter: WritableSignal<number> = signal(0);
  counter = signal(0);

  constructor() {
    this.counter.set(10);
    // setTimeout(() => {
    //   // this.normalCounter = 50;
    //   this.counter.set(10);
    //   // console.log('Normal Counter:', this.normalCounter);
    //   console.log('Signal Counter:', this.counter());
    // }, 5000);

    effect(() => {
      console.log('Counter value changed:', this.counter());
    });
  }

  increment() {
    this.counter.update((current) => current + 1);
  }
}
