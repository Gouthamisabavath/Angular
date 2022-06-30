import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiveService } from '../servive.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private AllServices:ServiveService) { }

  loginform= new FormGroup({
    email:new FormControl('',Validators.required),
    Password:new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }
  
  login(data:any)
  {
    this.AllServices.adminlogin(data).subscribe(
      (res:any) => {console.log(res)  
    if(res.success == 1){
      alert("Login Successful");
      localStorage.setItem('token',res.token); 
     
    }
    else if(res.success==2){
      alert(res.message);
      localStorage.setItem('token',res.token); 
      localStorage.setItem('email',res.email); 
    }
  },(error:HttpErrorResponse)=>{
    alert("Please check your Credentials");
  }
);}

  }


