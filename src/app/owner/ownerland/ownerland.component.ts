import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownerland',
  templateUrl: './ownerland.component.html',
  styleUrls: ['./ownerland.component.scss']
})
export class OwnerlandComponent implements OnInit {

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    // this.dataservice.getApiCall().subscribe(data=>{
    //   console.log(data);
      
    // })
  }

}
