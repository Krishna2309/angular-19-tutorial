import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.reactiveForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(),
    //   isChecked: new FormControl(),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     street: new FormControl(''),
    //     pincode: new FormControl(''),
    //   }),
    // });

    //using FormBuilder to create form group
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      lastName: ['', [Validators.required, Validators.minLength(10)]],
      email: [
        '',
        [Validators.required, , Validators.email, Validators.maxLength(15)],
      ],
      password: ['', [Validators.required]],
      isChecked: [''],
      address: this.fb.group({
        city: [''],
        street: [''],
        pincode: [''],
      }),
      skills: this.fb.array([]), // Example of FormArray
    });

    // To disable a form control programmatically
    // this.reactiveForm.controls['isChecked'].disable();
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
    });
  }

  addSkill() {
    this.skills.push(this.newSkill());
  }

  deleteSkill(i: number) {
    this.skills.removeAt(i);
  }

  onReactiveFormSubmit() {
    console.log('Reactive Form Data: ', this.reactiveForm.value);
  }

  setAllValues() {
    let Obj = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      password: 'password123',
      isChecked: true,
      address: {
        city: 'New York',
        street: '5th Avenue',
        pincode: '10001',
      },
    };
    this.reactiveForm.setValue(Obj);
  }

  patchValues() {
    let Obj = {
      firstName: 'Alice',
      email: 'alice.johnson@example.com',
    };
    this.reactiveForm.patchValue(Obj);

    // this.reactiveForm.controls['firstName'].patchValue('Bob');
  }

  resetValues() {
    this.reactiveForm.reset();
    // this.reactiveForm.controls['firstName'].reset();
  }
}
