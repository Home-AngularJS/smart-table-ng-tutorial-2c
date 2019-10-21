import { Component } from '@angular/core';
import { SmartTable, from, TableState } from 'smart-table-ng';
import { UserListService } from '../core/service/user-list.service';
import { DefaultSettingsService } from '../core/service/default-settings.service';

const providers = [{
  provide: SmartTable,
  useFactory: (Users: UserListService, settings: TableState) => from(Users.fetchUsers(), settings),
  deps: [UserListService, DefaultSettingsService]
}];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  providers
})
export class UserListComponent {
}
