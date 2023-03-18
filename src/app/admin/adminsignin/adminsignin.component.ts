import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from "src/app/data.service";

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss']
})
export class AdminsigninComponent implements OnInit {
  signInForm!: FormGroup;
  adminData: any;
  
  constructor( private http:HttpClient,private dataService : DataService,
     private fb : FormBuilder ,private router :Router) { }

  ngOnInit(): void {
   this.formValidation()
  }

  formValidation(){
    this.signInForm = this.fb.group({
      userName:['',[Validators.required,Validators.maxLength(40),Validators.pattern("^[a-zA-Z]+$")]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
    });
  }

  async submit() {
    console.log('signinForm data', this.signInForm.value);
   //get api call of Admin
    this.adminData = await this.dataService.getAdminDataApiCall().toPromise();

    var admin = this.adminData.find((ele: any) => {
      return ele.userName === this.signInForm.value.userName && ele.userPass === this.signInForm.value.userPass
    })

    if (admin) {
      alert("Login successful");
      // this.signInForm.reset();
      this.router.navigateByUrl('/admin/adminsucces')
    }
    else {
      alert("user not found")
      // this.signInForm.reset();
      this.router.navigateByUrl('/admin/adminsignin')
    }

  }

}


