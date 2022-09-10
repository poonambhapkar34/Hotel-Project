import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-usersucces',
  templateUrl: './usersucces.component.html',
  styleUrls: ['./usersucces.component.scss']
})
export class UsersuccesComponent implements OnInit {
  apidata: any;
  flag = false;
  searchText:any;

  constructor(private dataservice:DataService) { }

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


}
