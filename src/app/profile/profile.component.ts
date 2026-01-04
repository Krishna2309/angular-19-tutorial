import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  // userData = {
  //   id: 1,
  //   name: 'John Doe',
  //   username: 'johndoe',
  //   email: 'johndoe@example.com',
  // };

  userData: any;
  isEligible: boolean = false;
  userApiData: any;

  constructor(private _sharedDataService: SharedDataService) {
    this.userData = this._sharedDataService.userData;
    this.isEligible = this._sharedDataService.isEligibleForSubscription();
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this._sharedDataService.getUserDataFromAPI().subscribe((data) => {
      console.log(data);
      this.userApiData = data;
    });
  }
}
