import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent implements OnInit {
  signUpForm!:FormGroup;

  constructor(private fb:FormBuilder, private dataservice : DataService) { }

  ngOnInit(): void {
    this.formValidation()
  }
  formValidation(){
    this.signUpForm = this.fb.group({
      userName: new FormControl('',[Validators.pattern("^[a-zA-Z]+$")]),
      userMob:['',[Validators.required, Validators.maxLength(12)]],
      userEmail:['gmail.com',[Validators.required, Validators.email]],
      userPass:['',[Validators.required, Validators.maxLength(8)]],
      gender:['',[Validators.required]],
      userCheck:['',[Validators.requiredTrue]]

    });

  }
  postOwnerdata(data:any){
    // console.log(data);
    //post hotel data
    this.dataservice.postOwnerCall(data).subscribe((res)=>{
      console.log(res);

  })


}

}
