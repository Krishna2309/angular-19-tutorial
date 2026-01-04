import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signals',
  imports: [],
  templateUrl: './linked-signals.component.html',
  styleUrl: './linked-signals.component.scss',
})
export class LinkedSignalsComponent {
  quantitySignal = signal(1);
  price = 10;
  // total = computed(() => this.quantitySignal() * this.price);

  //Linked Signal with short hand syntax
  // total = linkedSignal(() => this.quantitySignal() * this.price);

  //Linked Signal with source and computation
  total = linkedSignal({
    source: this.quantitySignal,
    computation: (qty) => qty * this.price,
  });

  calculate() {
    // this.quantitySignal.update((qty) => qty + 1);
    this.quantitySignal.set(2);
  }
}
