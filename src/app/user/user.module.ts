import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, JsonpClientBackend, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { ApiService } from '../api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    UserPageRoutingModule
  ],
  declarations: [UserPage]
})
export class UserPageModule {}
