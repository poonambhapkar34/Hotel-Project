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


  constructor(private dataservice:DataService,private http:HttpClient, private fb : FormBuilder ,private router :Router) { }

  ngOnInit(): void {
   this.formValidation()
  }

  formValidation(){
    this.signInForm = this.fb.group({
      userName:['',[Validators.required,Validators.maxLength(40)]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
    });
  }
  
  signInData(data:any){
    console.log(data);
    this.http.get<any>("http://localhost:3000/owner").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userName===this.signInForm.value.userName && a.userPass===this.signInForm.value.userPass
      })
      if(user){
        alert("Login successful");
        this.signInForm.reset();
        this.router.navigateByUrl('osucces')
      }
      else{
        alert("user not found")
        this.signInForm.reset();
        this.router.navigateByUrl('ofaill')
      }
    })
  }
  
  
  getOwnerData(){
    this.dataservice.getOwnerCall().subscribe((data)=>{
    this.apidata=data
    console.log(data);
    
      
    })
  }
}
