import { Injectable } from '@angular/core';
import { User, users } from './data';
import { of, Observable, merge } from 'rxjs/index';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserListService {

  loadUsers(): Observable<User[]> {
    return of(users)
        .pipe(
            tap(() =>
                this.loadUsersPage()
            ));
  }

  loadUsersPage() {
    console.log('===========================')
    // delay(2000);
  }
}
