import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../iuser';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  base_url = 'http://localhost:3000/Users';
  constructor(private _http: HttpClient) {}

  //getting the data from local json server installed
  getUsersData() {
    return this._http.get<Iuser[]>(this.base_url);
  }

  postData(data: Iuser) {
    return this._http.post<Iuser>(this.base_url, data);
  }

  getUserById(id: number) {
    return this._http.get<Iuser>(`${this.base_url}/${id}`);
  }

  putUserById(id: number, data: Iuser) {
    return this._http.put<Iuser>(`${this.base_url}/${id}`, data);
  }

  deleteUserById(id: number) {
    return this._http.delete<Iuser>(`${this.base_url}/${id}`);
  }
}
