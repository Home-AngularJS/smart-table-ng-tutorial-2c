import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SmartTableModule } from 'smart-table-ng';
// import { UsersModule } from './user-list/users.module';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
      BrowserModule,
      CommonModule,
      HttpClientModule,
      FormsModule,
      SmartTableModule,
      // UsersModule
  ],
  declarations: [
      AppComponent,
      UserListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
