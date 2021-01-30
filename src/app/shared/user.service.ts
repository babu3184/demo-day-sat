import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';


const headerOption = {
  headers: new HttpHeaders({'Content-type': 'application/json '})
};

@Injectable()
export class UserService {
url = 'http://localhost:3000/User';

currentUser: User = {
    id: null,
    fname: '',
    lname: '',
    email: '',
    number: null,
    age: null,
    country: '',
    states: '',
    address: '',
    haddress1: '',
    haddress2: '',
    caddress1: '',
    caddress2: '',
    subscribe: '',
  };

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
     return this.http.get<User[]>(this.url, headerOption);
  }
  deleteUser(id: number): Observable<User>{
   return this.http.delete<User>(this.url + '/' + id, headerOption);
  }
}
