import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
    this.http = http;
  }

  saveUser(user: any): any {
    return this.http
      .put<any>(`http://indobytes-json-server--3000.local.webcontainer.io`, {
        user,
      })
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getUsers(): any {
    return this.http
      .get<any>(
        'https://indobytes-json-server--3000.local.webcontainer.io/users',
      )
      .pipe(
        map((result: any) => {
          return result;
        })
      );
  }

  getFilteredUser(name: string, password: string): any {
    return this.http
      .post<any>(
        `https://indobytes-json-server--3000.local.webcontainer.io/users`,
        {
          name,
          password,
        }
      )
      .pipe(
        map((result) => {
          return result;
        })
      );
  }
}
