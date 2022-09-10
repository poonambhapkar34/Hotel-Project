import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserlandComponent } from './userland/userland.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { UsersuccesComponent } from './usersucces/usersucces.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';



@NgModule({
  declarations: [
    UserlandComponent,
    UsersigninComponent,
    UsersignupComponent,
    UsersuccesComponent,
    HotelbookingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    HttpClientModule,
    Ng2SearchPipeModule
    
  ]
})
export class UserModule { }
