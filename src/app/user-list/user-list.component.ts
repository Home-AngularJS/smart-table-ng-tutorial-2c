import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SmartTable, from, TableState } from 'smart-table-ng';
import { UserListService } from '../core/service/user-list.service';
import { DefaultSettingsService } from '../core/service/default-settings.service';
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';

const providers = [{
  provide: SmartTable,
  useFactory: (Users: UserListService, settings: TableState) => from(Users.loadUsers(), settings),
  deps: [UserListService, DefaultSettingsService]
}];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers
})
export class UserListComponent implements OnInit, AfterViewInit {

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
    merge()
        .pipe(
            tap(() =>
                console.log('---------------------------')
            ));
  }

}

