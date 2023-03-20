import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hoteldetail',
  templateUrl: './hoteldetail.component.html',
  styleUrls: ['./hoteldetail.component.scss']
})
export class HoteldetailComponent implements OnInit {
  regitrationForm!: FormGroup;
  dataId: any;
  editData: any;
  editIdArray:any=[];
  newRegistration: any;
  hotelJourney!: string;


  constructor(private fb: FormBuilder, private dataservice: DataService,private router:Router) { }

  ngOnInit(): void {
    console.log('hotel details');
    

    //this.newRegistration = this.dataservice.newRegistration;
    this.hotelJourney = this.dataservice.hotelJourney;
    console.log('data...', this.editData);
    // if(this.newRegistration){
    //   this.editData = {} ;
    // }
    // else{
    //   this.editData = this.dataservice.HotelByIdApiData;
    // }
    if (this.hotelJourney == 'New Registration') {
      this.editData = {};
    } else {
      this.editData = this.dataservice.HotelByIdApiData;
    } 

  //}
  // fetchIdData() {
  //   for (let i=0; i < this.editData.length; i++) {
  //     if (this.editData[i].id == this.dataId) {
  //       this.editIdArray.push(this.editData[i])
  //     }
  //   }

   
    // console.log('id Data', this.editIdArray[0].userName);
    this.formData()

  }

  formData() {
    this.regitrationForm = this.fb.group({
      //userName :[ this.editData ?  this.editData.userName : '']
      // userName: [this.editIdArray[0] ? this.editIdArray[0].userName : '', [Validators.required, Validators.maxLength(40)]],
      // hotelName: [this.editIdArray[0] ? this.editIdArray[0].hotelName : '', [Validators.required,]],
      // hotelAddress: [this.editIdArray[0] ? this.editIdArray[0].hotelAddress : '', [Validators.required,]],
      // hotelMobile: [this.editIdArray[0] ? this.editIdArray[0].hotelMobile : '', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]{10}')]],
      // hotelMenu: [this.editIdArray[0] ? this.editIdArray[0].hotelMenu : '', [Validators.required]],
      // roomAvailable: [this.editIdArray[0] ? this.editIdArray[0].roomAvailable : '', Validators.required],
      // owenrCheck: [this.editIdArray[0] ? this.editIdArray[0].owenrCheck : '', [Validators.requiredTrue]],
      // userPass: [this.editIdArray[0] ? this.editIdArray[0].userPass : '', [Validators.required, Validators.maxLength(8)]],

      userName: [this.editData ? this.editData.userName : '', [Validators.required, Validators.maxLength(40)]],
      hotelName: [this.editData ? this.editData.hotelName : '', [Validators.required,]],
      hotelAddress: [this.editData ? this.editData.hotelAddress : '', [Validators.required,]],
      hotelMobile: [this.editData ? this.editData.hotelMobile : '', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]{10}')]],
      hotelMenu: [this.editData ? this.editData.hotelMenu : '', [Validators.required]],
      roomAvailable: [this.editData ? this.editData.roomAvailable : '', Validators.required],
      owenrCheck: [this.editData ? this.editData.owenrCheck : '', [Validators.requiredTrue]],
      userPass: [this.editData ? this.editData.userPass : '', [Validators.required, Validators.maxLength(8)]],
    });
   

  }

  submit() {
     //post api call
   // if (this.newRegistration) {
    if(this.hotelJourney == 'New Registration'){
      this.dataservice.postHotelDetailsApiCall(this.regitrationForm.value).subscribe((res) => {
        console.log(res);
      })
    }
    else {
      //patch pi call
      this.dataservice.patchHotelDetailsApiCall(this.regitrationForm.value).subscribe((res: any) => {
        console.log(res);
      })
    }
    this.router.navigateByUrl('/owner/osucces')
  }
  

}
