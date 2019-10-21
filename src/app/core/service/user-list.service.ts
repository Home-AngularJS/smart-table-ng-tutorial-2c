import { Injectable } from '@angular/core';
import { users, User } from './users';
import {of, Observable, merge} from 'rxjs/index';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserListService {

  fetchUsers(): Observable<User[]> {
    return of(users)
        .pipe(
            tap(() =>
                this.loadLessonsPage()
            ));
  }

  loadLessonsPage() {
    console.log('===========================')
    // delay(2000);
  }
}
