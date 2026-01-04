import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  topic: any;
  constructor(private router: Router) {
    this.topic = 'Angular 19';
    console.log('constructor is being called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //use for component's input property changes
    console.log('1. ngOnChanges is being called');
  }

  ngOnInit(): void {
    //use for component initialization or api calls
    console.log('2. ngOnInit is being called');
  }

  ngDoCheck(): void {
    //use for custom change detection or every change detection
    console.log('3. ngDoCheck is being called');
  }

  ngAfterContentInit(): void {
    //use for after projecting content into component. Specially child component's content or ngContent is being initialized
    console.log('4. ngAfterContentInit is being called');
  }

  ngAfterContentChecked(): void {
    //use for after projected content checked. Specially child component's content or ngContent is being checked
    console.log('5. ngAfterContentChecked is being called');
  }

  ngAfterViewInit(): void {
    //use for after component's views and child views initialized. Specially @ViewChild and @ViewChildren are initialized
    console.log('6. ngAfterViewInit is being called');
  }

  ngAfterViewChecked(): void {
    //use for after component's views and child views checked
    console.log('7. ngAfterViewChecked is being called');
  }

  ngOnDestroy(): void {
    //use for cleanup just before angular destroys the component
    console.log('8. ngOnDestroy is being called');
  }

  loginData() {
    // user verfification logic
    //this.router.navigateByUrl('/attribute-directives');
    this.router.navigate(['/attribute-directives']);
  }
}
