import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsucces',
  templateUrl: './adminsucces.component.html',
  styleUrls: ['./adminsucces.component.scss']
})
export class AdminsuccesComponent implements OnInit {
  HotelDetails: any;


  constructor(private router : Router, private dataservice : DataService) { }

  ngOnInit(): void {
   this.getHotelDetails();
  }

  getHotelDetails() {
    this.dataservice.getHotelDetailsApiCall().subscribe((data) => {
      this.HotelDetails = data
      console.log(data);
    })
  }
  newChange():void{
    this.router.navigateByUrl('adminsignin')
  }
 //deletApi
 async deleteData(id: any) {
  await this.dataservice.deletHotelById(id).toPromise()
  //to refresh hotel list
  this.getHotelDetails();
}

}
