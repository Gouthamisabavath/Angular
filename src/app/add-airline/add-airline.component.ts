import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiveService } from '../servive.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {

  airlineform= new FormGroup({
    airlineid : new FormControl('',Validators.required),
    airlinename : new FormControl('',Validators.required)
  })

  constructor(private router:Router, private services:ServiveService) { }

  ngOnInit(): void {
  }

  public addairline(adddata:any)  {

      this.services.AddAirline(adddata).subscribe((res:any) => {console.log(res)  
        if(res.success !=null){
          alert("Airline Added Successfully");  
        }
      },(error:HttpErrorResponse)=>{
        alert("Failed to add airline");
      }
    );
    }

}
