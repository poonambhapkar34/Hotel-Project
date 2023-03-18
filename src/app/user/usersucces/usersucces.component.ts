import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-usersucces',
  templateUrl: './usersucces.component.html',
  styleUrls: ['./usersucces.component.scss']
})
export class UsersuccesComponent implements OnInit {
  hotelDetails: any;
  searchText:any;

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getHotelDetails()

  }
  getHotelDetails() {
    this.dataservice.getHotelDetailsApiCall().subscribe((data) => {
      this.hotelDetails = data
    })
  }


}
