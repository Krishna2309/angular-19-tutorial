import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-view-user',
  imports: [ReusableComponent],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.scss',
})
export class ViewUserComponent implements OnInit {
  userId: any;

  userData: any;
  constructor(
    private _activeRoute: ActivatedRoute,
    private _crudService: CrudService,
    private _router: Router
  ) {
    this.userId = this._activeRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this._crudService.getUserById(this.userId).subscribe((res) => {
      console.log(res);
      this.userData = res;
    });
  }

  goBack() {
    this._router.navigateByUrl('/crud');
  }
}
