import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.scss']
})
export class UsersigninComponent implements OnInit {
  signInForm!: FormGroup;
  resonseData: any;
  apidata: any;
  userApiData :any;


  constructor(private dataservice : DataService,private fb : FormBuilder ,private http:HttpClient,private router :Router) { }

  ngOnInit(): void {
   this.formValidation
  }

  formValidation(){
    this.signInForm = this.fb.group({
      userName:['',[Validators.required,Validators.maxLength(40)]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
    });
  }
  
  submit() {
   //get usr data from db
    this.dataservice.getUserApiCall().subscribe(resp => {
      this.userApiData = resp;
    })
    let validUser = this.userApiData.find((ele: any) => {
      return this.signInForm.value.userName == ele.userName && this.signInForm.value.userPass == ele.userPass
    })

    if (validUser) {
      alert("Login successful");
      this.signInForm.reset();
      this.router.navigateByUrl('/user/usersucces')
    }
    else {
      alert("user not found")
      this.signInForm.reset();
      this.router.navigateByUrl('/user/usersignin')
    }
  }

}
