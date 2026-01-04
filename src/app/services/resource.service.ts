import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  base_url: string = 'https://fake-store-api.mock.beeceptor.com';

  //https://fake-store-api.mock.beeceptor.com/api/users

  constructor(private _http: HttpClient) {}

  //getting the data from fake store api using http client
  getAllData() {
    return this._http.get(`${this.base_url}/api/users`);
  }

  //using rxResource to get the data as observable
  rxResourceData = rxResource({
    loader: () => this._http.get(`${this.base_url}/api/users`),
  });

  //using resource() to get the data and it returns as promise
  resourceData = resource({
    loader: () =>
      fetch(`${this.base_url}/api/users`).then(
        (res) => res.json() as Promise<any>
      ),
  });
}
