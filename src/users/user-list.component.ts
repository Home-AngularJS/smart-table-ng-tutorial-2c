import { Component } from '@angular/core';
import { SmartTable, from, TableState } from 'smart-table-ng';
import { UsersService } from './users.service';
import { DefaultSettingsService } from './default-settings.service';

const providers = [{
  provide: SmartTable,
  useFactory: (Users: UsersService, settings: TableState) => from(Users.fetchUsers(), settings),
  deps: [UsersService, DefaultSettingsService]
}];

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  providers
})
export class UserListComponent {
}