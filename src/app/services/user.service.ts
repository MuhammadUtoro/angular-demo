import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface User {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private userPath = '../../assets/users.json';

  constructor(private http: HttpClient) {}

  // Fetching Users from JSON file
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userPath);
  }

  login(email: string, password: string): Observable<User | null> {
    return this.getUsers().pipe(
      map(
        (users) =>
          users.find(
            (user) => user.email === email && user.password === password
          ) || null
      )
    );
  }
}
