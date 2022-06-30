import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiveService } from '../servive.service';

@Component({
  selector: 'app-schedule-airline',
  templateUrl: './schedule-airline.component.html',
  styleUrls: ['./schedule-airline.component.css']
})
export class ScheduleAirlineComponent implements OnInit {
  constructor(private services :ServiveService){ }

  formSchedhuleAirline = new FormGroup({
    airlineid: new FormControl('',Validators.required),
    flightnumber: new FormControl('',Validators.required),
    fromplace :new FormControl('',Validators.required),
    toplace :new FormControl('',Validators.required),
    startdate:new FormControl('',Validators.required),
    enddate :new FormControl('',Validators.required),
    scheduledayss: new FormControl('',Validators.required),
    instrument: new FormControl('',Validators.required),
    bcs : new FormControl('',Validators.required),
    nbcs: new FormControl('',Validators.required),
    noofrows: new FormControl('',Validators.required),
    tktcost: new FormControl('',Validators.required),
    meal: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
  }

  scheduleairline(airlinedata:any){
    this.services.scheduleflight(airlinedata).subscribe((res:any) => {console.log(res)  
      if(res.success ==1){
        alert("Airline Scheduled Successfully");  
      }
    },(error:HttpErrorResponse)=>{
      alert("Failed to Schedule airline");
    }
  );

}
}
