import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { Sibling1Component } from '../sibling1/sibling1.component';
import { Sibling2Component } from '../sibling2/sibling2.component';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-parent',
  imports: [
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    ReusableComponent,
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements AfterViewInit {
  parentProperty: string = 'Data from Parent Component';

  dataFromChild: string = '';

  sibling1Data: any;
  sibling2Data: any;

  @ViewChild('reusable') reusableComponent!: ReusableComponent;

  ngAfterViewInit(): void {
    this.reusableComponent.childProperty =
      'Greeting from Parent via ViewChild!';
  }

  receiveDatafromChild(data: string) {
    this.dataFromChild = data;
  }

  receiveEvent1(data: any) {
    this.sibling1Data = data;
    console.log('Data received from Sibling 1:', this.sibling1Data);
  }

  receiveEvent2(data: any) {
    this.sibling2Data = data;
    console.log('Data received from Sibling 2:', this.sibling2Data);
  }
}
