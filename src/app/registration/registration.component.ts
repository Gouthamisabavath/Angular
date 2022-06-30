import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiveService } from '../servive.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerform = new FormGroup({
    Username: new FormControl('',Validators.required),
    Password:new FormControl('',Validators.required),
    Email : new FormControl('',Validators.required),
    Gender:new FormControl('',Validators.required),
    Phonenumber:new FormControl('',Validators.required)
  })
  constructor(private services:ServiveService) { }

  ngOnInit(): void {
  }

  register(datas:any){
    this.services.registeruser(datas).subscribe((res:any) => {console.log(res)  
      if(res.success ==1){
        alert("User Registered Successfully");  
      }
    },(error:HttpErrorResponse)=>{
      alert("Failed to Register user");
    }
  );
  }
}
