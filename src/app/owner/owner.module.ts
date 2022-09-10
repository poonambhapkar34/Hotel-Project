import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnerlandComponent } from './ownerland/ownerland.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { OsuccesComponent } from './osucces/osucces.component';
import { OfaillComponent } from './ofaill/ofaill.component';
import { HoteldetailComponent } from './hoteldetail/hoteldetail.component';
import {MatIconModule} from '@angular/material/icon'



@NgModule({
  declarations: [
    OwnersigninComponent,
    OwnersignupComponent,
    OwnerlandComponent,
    OsuccesComponent,
    OfaillComponent,
    HoteldetailComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class OwnerModule { }
