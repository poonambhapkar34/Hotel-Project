import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  image='/assets/img/royal.jpg'

  constructor( private dataservice:DataService,private router :Router ) { }

  ngOnInit(): void {
  }
  Journey(data:any){
    console.log('...jy');
    this.dataservice.userJourney=data
    if(data=='Admin'){
      this.router.navigateByUrl('/admin/adminland')
    }
    else if (data=='Owner'){
      this.router.navigateByUrl('/owner/ownerland')
    }

  }

}
