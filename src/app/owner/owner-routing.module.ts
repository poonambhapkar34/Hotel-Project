import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoteldetailComponent } from './hoteldetail/hoteldetail.component';
import { OfaillComponent } from './ofaill/ofaill.component';
import { OsuccesComponent } from './osucces/osucces.component';
import { OwnerlandComponent } from './ownerland/ownerland.component';
import { OwnersigninComponent } from './ownersignin/ownersignin.component';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';

const routes: Routes = [
  {path:'ownerland',component:OwnerlandComponent},
  {path:'',redirectTo:'ownerland',pathMatch:'full'},

  {path:'ownersignin',component:OwnersigninComponent},
  {path:'ownersignup',component:OwnersignupComponent},
  {path:'hoteldetail',component:HoteldetailComponent},

  {path:'osucces',component:OsuccesComponent},
  {path:'ofaill',component:OfaillComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
