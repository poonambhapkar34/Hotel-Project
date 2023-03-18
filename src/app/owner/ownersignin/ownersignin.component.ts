import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownersignin',
  templateUrl: './ownersignin.component.html',
  styleUrls: ['./ownersignin.component.scss']
})
export class OwnersigninComponent implements OnInit {
  apidata: any;
  signInForm!: FormGroup;
  hotelDetails: any;
  hotelListByOwner: any = [];
  ownerData: any
  ownerSuccData: any;
  validOwner: any;
  constructor(private dataservice: DataService, private http: HttpClient, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formValidation();
    this.OwnerGetApiCall();
    this.HotelDetailsGetApiCall();
  }

  formValidation() {
    this.signInForm = this.fb.group({
      userName: ['', [Validators.required, Validators.maxLength(40)]],
      userPass: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }

  OwnerGetApiCall() {
    this.dataservice.getOwnerApiCall().subscribe(respo => {
      this.ownerData = respo;
      console.log(respo);
    });
    console.log('this.ownerData', this.ownerData);
  }

  HotelDetailsGetApiCall() {
    this.dataservice.getHotelDetailsApiCall().subscribe(respo => {
      this.hotelDetails = respo;
      console.log(respo);
    })
  }
  submit() {
    if (this.hotelDetails) {
      this.hotelDetails.forEach((element: any) => {
        if (this.signInForm.value.userName == element.userName) {
          this.hotelListByOwner.push(element);
        }
      })
      this.dataservice.hotelListByOwner = this.hotelListByOwner;
      console.log('this.dataservice.hotelListByOwner', this.dataservice.hotelListByOwner);
    }

    if (this.ownerData) {
      this.validOwner = this.ownerData.find((dbData: any) => {
        return dbData.userName === this.signInForm.value.userName && dbData.userPass === this.signInForm.value.userPass
      })
      console.log('this.ownerSuccData ', this.ownerSuccData);
    }
    this.redirection()
  }

  redirection() {
    if (this.validOwner) {
      alert("Login successful");
      this.dataservice.ownerName = this.signInForm.value.userName;
      this.signInForm.reset();
      this.router.navigateByUrl('/owner/osucces')
    }
    else {
      alert("user not found")
      this.signInForm.reset();
      this.router.navigateByUrl('/owner/ofaill')
    }
  }

}
