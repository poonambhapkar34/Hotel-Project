import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-osucces',
  templateUrl: './osucces.component.html',
  styleUrls: ['./osucces.component.scss']
})
export class OsuccesComponent implements OnInit {
  apidata: any;
  flag = false;
  ownerName:any
  HotelListByOwnerdata: any;
  ownerHotelData:any=[];
  hotelListByOwner: any;
  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    this.ownerName= this.dataservice.ownerName;
   this.hotelListByOwner = this.dataservice.hotelListByOwner;
   console.log(this.hotelListByOwner);
   
    //this.getHotelDetails()
  }




  //deleteApi
 async deleteData(id: any) {
  this.apidata =  await this.dataservice.deletHotelCall(id).toPromise()

    //to refresh hotel list
   // this.getHotelDetails()

  }

 async editData(id: any) {
   // this.dataservice.dataId = id;
    this.dataservice.newRegistration = false;
    this.dataservice.getApiData = await this.dataservice.getHotelDetailById(id).toPromise()
    //this.dataservice.getApiData = await this.dataservice.getHotelCall().toPromise()
    // this.dataservice.getHotelCall().subscribe((data) => {
    //   this.dataservice.getApiData = data
    //   console.log(data);
    // })
    //Edit Dtat by Id
    // this.dataservice.getHotelCallById(id).subscribe((resp) => {
    //   this.dataservice.getApiData = resp;
    // })
    this.router.navigateByUrl('/hoteldetail')

  } 
}
