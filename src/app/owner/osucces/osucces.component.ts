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
  refreshedHotelList : any =[]
  showHotelDetails: boolean = false;
  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
   this.ownerName = this.dataservice.ownerName;
   this.hotelListByOwner = this.dataservice.hotelListByOwner;
   console.log(this.hotelListByOwner);
   
  }

  //deleteApi
   async deleteData(id: any) {
    this.apidata =  await this.dataservice.deletHotelById(id).toPromise()

    //to refresh hotel list
    this.refreshHotelDetails(id)
  }

  refreshHotelDetails(id:any) {
    this.hotelListByOwner.forEach((ele:any)=>{
     if(ele.id != id){
      this.refreshedHotelList.push(ele)
     }
    })
    this.hotelListByOwner = [...this.refreshedHotelList];
    this.refreshedHotelList = [];
  }

  async editData(id: any) {
    this.dataservice.hotelDetailId = id
    // this.dataservice.newRegistration = false;
    //this.dataservice.hotelJourney = 'Edit';
    this.dataservice.HotelByIdApiData = await this.dataservice.getHotelDetailById(id).toPromise()

    this.router.navigateByUrl('/owner/hoteldetail')

  } 
  newRegistration()
  {
      //  this.dataservice.newRegistration = true;
    this.dataservice.hotelJourney = 'New Registration';
    this.router.navigateByUrl('/owner/hoteldetail');
  }
  viewHotelList(){
    this.showHotelDetails = true;
  }

  ngOnDistroy(){
    this.dataservice.hotelJourney = '';
  }
}
