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

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getHotelDetails()
  }

  getHotelDetails() {
    this.dataservice.getHotelCall().subscribe((data) => {
      this.apidata = data
      console.log(data);
    })

    this.flag = true
  }


  //deleteApi
  deleteData(id: any) {
    this.dataservice.deletHotelCall(id).subscribe((data) => {
      this.apidata = data
      console.log(data);
    })

    //to refresh hotel list
    this.getHotelDetails()

  }

 async editData(id: any) {
    this.dataservice.dataId = id;
    this.dataservice.getApiData = await this.dataservice.getHotelCall().toPromise()
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
