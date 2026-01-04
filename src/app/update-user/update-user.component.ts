import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule, ReusableComponent],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.scss',
})
export class UpdateUserComponent implements OnInit {
  userData: any;

  userId: any;

  updateUserForm: FormGroup;

  constructor(
    private _crudService: CrudService,
    private _activeRoute: ActivatedRoute,
    private _router: Router,
    private fb: FormBuilder
  ) {
    this.updateUserForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: [''],
    });
  }

  ngOnInit(): void {
    this.userId = this._activeRoute.snapshot.params['id'];
    console.log(this.userId);

    this._crudService.getUserById(this.userId).subscribe((res) => {
      console.log(res);
      this.userData = res;

      this.updateUserForm.setValue({
        id: this.userData.id,
        name: this.userData.name,
        username: this.userData.username,
        email: this.userData.email,
      });
    });
  }

  onSubmit() {
    console.log(this.updateUserForm.value);
    this._crudService
      .putUserById(this.userId, this.updateUserForm.value)
      .subscribe((res) => {
        console.log('User updated successfully', res);
        this._router.navigateByUrl('/crud');
      });
  }

  onCancel() {
    this._router.navigateByUrl('/crud');
  }
}
