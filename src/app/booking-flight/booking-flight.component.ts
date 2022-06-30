import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiveService } from '../servive.service';

@Component({
  selector: 'app-booking-flight',
  templateUrl: './booking-flight.component.html',
  styleUrls: ['./booking-flight.component.css']
})
export class BookingFlightComponent implements OnInit {

 
  constructor( private router:Router,private services:ServiveService
    ) { }

    ticketbookform =new FormGroup({
      Username :new FormControl('',Validators.required),
      Bookingdate:new FormControl('',Validators.required),
      Flightnumber:new FormControl('',Validators.required),
      PassengerEmail :new FormControl('',Validators.email),
      PassengerName:new FormControl('',Validators.required),
      Numberofseats:new FormControl('',Validators.required),
      Optformeal :new FormControl('',Validators.required),
      Seatnumbers:new FormControl('',Validators.required),
      Pnrnumber:new FormControl('',Validators.required)
    });
  
    ngOnInit(): void {
  }

  bookticketclick(datass:any){
    this.services.Bookticketss(datass).subscribe((res:any)=> {console.log(res) 
      if(res!=null){
        console.log(res);
        alert("Ticket booked successfully with PNR"+res);
      }
      else{
        alert("Ticket book fail")
      }
     });
    }
  }
