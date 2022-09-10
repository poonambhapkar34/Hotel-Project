import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { AdminModule } from './admin/admin.module';
import { OwnerModule } from './owner/owner.module';
import { UserModule } from './user/user.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    MatButtonModule,
    // BrowserModule,
    // Ng2SearchPipeModule,

    // MatFormFieldModule,
    // ReactiveFormsModule,
    // MatRadioModule,
    // MatInputModule,
    AdminModule,
    OwnerModule,
    UserModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
