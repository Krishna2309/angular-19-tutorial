import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.scss',
})
export class TemplateDrivenFormComponent implements OnInit {
  userObject: User = {};

  onFormSubmit(userForm: NgForm) {
    console.log('Form Data: ', userForm.value);
  }

  ngOnInit(): void {
    //initialize userObject with default values if needed
    // this.userObject = {
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   email: 'john.doe@example.com',
    //   password: 'password123',
    //   isChecked: false,
    // };
  }

  // Function to set form values programmatically but we need to set all values even we don't want to change some values
  setUserValues(userForm: NgForm) {
    let Obj = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      password: 'password456',
      isChecked: true,
    };
    userForm.setValue(Obj);
  }

  // Function to patch form values programmatically - we can set only those values which we want to change
  patchUserValues(userForm: NgForm) {
    let Obj = {
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice@example.com',
    };
    userForm.control.patchValue(Obj);
    // userForm.form.patchValue(Obj);
  }

  // Function to reset form values programmatically
  resetUserValues(userForm: NgForm) {
    userForm.reset();
    //userForm.resetForm();
  }
}
