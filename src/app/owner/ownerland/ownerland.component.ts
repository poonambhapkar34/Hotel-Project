import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownerland',
  templateUrl: './ownerland.component.html',
  styleUrls: ['./ownerland.component.scss']
})
export class OwnerlandComponent implements OnInit {

  constructor(private dataservice:DataService,private router : Router) { }

  ngOnInit(): void {
    // this.dataservice.getApiCall().subscribe(data=>{
    //   console.log(data);
      
    // })
  }
  

}
