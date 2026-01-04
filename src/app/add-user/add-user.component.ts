import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, ReusableComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  addUserForm: FormGroup;

  constructor(
    private _router: Router,
    private fb: FormBuilder,
    private crudService: CrudService
  ) {
    this.addUserForm = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
    });
  }

  onSubmit() {
    console.log(this.addUserForm.value);
    this.crudService.postData(this.addUserForm.value).subscribe((res) => {
      console.log('User added successfully', res);
      this._router.navigateByUrl('/crud');
    });
  }

  onCancel() {
    this._router.navigateByUrl('/crud');
  }
}
