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
  
  constructor(private dataservice : DataService ,private http:HttpClient, private fb : FormBuilder ,private router :Router) { }

  ngOnInit(): void {
   this.formValidation()
  }

  formValidation(){
    this.signInForm = this.fb.group({
      userName:['',[Validators.required,Validators.maxLength(40),Validators.pattern("^[a-zA-Z]+$")]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
    });
  }

  signInData(data:any){
    console.log(data);
    this.http.get<any>("http://localhost:3000/admin").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userName===this.signInForm.value.userName && a.userPass===this.signInForm.value.userPass
      })
      if(user){
        alert("Login successful");
        this.signInForm.reset();
        this.router.navigateByUrl('adminsucces')
      }
      else{
        alert("user not found")
        this.signInForm.reset();
        this.router.navigateByUrl('adminfaill')
      }
    })
  }

}


