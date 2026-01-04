import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) {}

  userData = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    subscription: 'basic',
  };

  isEligibleForSubscription() {
    if (
      this.userData.subscription === 'basic' &&
      this.userData.email.endsWith('@example.com')
    ) {
      return true;
    }
    return false;
  }

  getUserDataFromAPI() {
    return this._http.get(this.API_URL);
  }
}
