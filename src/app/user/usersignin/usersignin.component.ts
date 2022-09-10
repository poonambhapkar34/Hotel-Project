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
  
  signInData(data:any){
    console.log(data);
    this.http.get<any>("http://localhost:3000/user").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userName===this.signInForm.value.userName && a.userPass===this.signInForm.value.userPass
      })
      if(user){
        alert("Login successful");
        this.signInForm.reset();
        this.router.navigateByUrl('/userland')
      }
      else{
        alert("user not found")
        this.signInForm.reset();
        // this.router.navigateByUrl('adminfaill')
      }
    })
  }
  
  getUserData(){
    this.dataservice.getUserCall().subscribe((data)=>{
    this.apidata=data
    console.log(data);
    })
  }
  

}
