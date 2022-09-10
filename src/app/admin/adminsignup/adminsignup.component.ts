import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent implements OnInit {
  signUpForm!:FormGroup;


  constructor(private fb:FormBuilder, private dataservice : DataService, private roter:Router) { }

  ngOnInit(): void {
   this.formValidation()
  }
  formValidation(){
    this.signUpForm = this.fb.group({
      userName: new FormControl('',[Validators.pattern("^[a-zA-Z]+$")]),
      userMob:['',[Validators.required, Validators.maxLength(12)]],
      userEmail:['',[Validators.required, Validators.email]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
      gender:['',[Validators.required]],
      userCheck:['',[Validators.requiredTrue]]

    });
  }

  postAdmindata(data:any){
    console.log(data);
    
    //postapi
    this.dataservice.postAdminCall(data).subscribe((res)=>{
      console.log(res);
      
  })
  alert("you have suceesfully create account")
  this.roter.navigateByUrl('/adminsignin')

}
  
  
  
}

