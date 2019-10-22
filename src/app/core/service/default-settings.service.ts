import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DefaultSettingsService {
  search = {};

  slice = { page: 1, size: 10 };

  filter = {
    // balance: [{ operator: 'lt', type: 'number', value: 2000 }]
    // balance: [{ operator: 'gte', type: 'number', value: 3500 }] //TODO  operator: <eq|gt|gte|in|lt|lte|ne|nin>, type: <User.balance: number>, value: <MAX>
    name: [{ operator: 'lt', type: 'string', value: 'A' }]
  };

  sort = {
    pointer: 'name.first', // pointer: 'balance',
    direction: 'asc'
  };

}
