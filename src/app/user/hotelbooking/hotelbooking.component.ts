import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hotelbooking',
  templateUrl: './hotelbooking.component.html',
  styleUrls: ['./hotelbooking.component.scss']
})
export class HotelbookingComponent implements OnInit {
  apidata: any;
  signInForm!: FormGroup;

  constructor(private dataservice:DataService,private http:HttpClient, private fb : FormBuilder ,private router :Router) { }

  ngOnInit(): void {
    this.formValidation()
  }
  formValidation(){
    this.signInForm = this.fb.group({
      userName:['',[Validators.required,Validators.maxLength(40)]],
      userAddress:['',[Validators.required]],
      bookingAmount:['1000',[Validators.required,Validators.maxLength(40)]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
    });
  }
 
  //postapi
postHotelBookingdata(data:any){
    console.log(data);
    this.dataservice.postHotelBookingCall(data).subscribe((res)=>{ 
  })
    confirm("You book your hotel succesfully");
    this.router.navigateByUrl('/userland')
}

}
