import { Injectable } from '@angular/core';
import { users, User } from './users';
import { of, Observable } from 'rxjs/index';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  fetchUsers(): Observable<User[]> {
    return of(users)
      .pipe(delay(2000));
  }
}