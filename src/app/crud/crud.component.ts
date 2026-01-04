import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Iuser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-crud',
  imports: [CommonModule, ReusableComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CRUDComponent implements OnInit {
  greetForChildProp: string = 'Hello from CRUD Component!';
  apiData: Iuser[] = [];
  constructor(private crudService: CrudService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.crudService.getUsersData().subscribe((data) => {
      console.log(data);
      this.apiData = data;
    });
  }

  addNewUser() {
    this.router.navigateByUrl('/adduser');
  }

  onUpdateUser(id: number) {
    this.router.navigate(['/updateuser', id]);
  }

  onViewUser(id: number) {
    this.router.navigate(['/viewuser', id]);
  }

  onDeleteUser(id: number) {
    this.crudService.deleteUserById(id).subscribe((res) => {
      console.log('User deleted successfully', res);
      alert('User deleted successfully');
      this.getAllUsers();
    });
  }
}
