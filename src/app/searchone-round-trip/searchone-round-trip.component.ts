import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiveService } from '../servive.service';

@Component({
  selector: 'app-searchone-round-trip',
  templateUrl: './searchone-round-trip.component.html',
  styleUrls: ['./searchone-round-trip.component.css']
})
export class SearchoneRoundTripComponent implements OnInit {

  constructor(private router:Router,private services:ServiveService ) { }

  onewayroundtrip:  any=[];


  ngOnInit(): void {
  }
  OneWay()
  {
    console.log('helloo');
    this.services.Oneway().subscribe(
      (res:any) =>
      {
        console.log(res);
        if(res !=null){
         this.onewayroundtrip=res; 
        }
      },
     (error:HttpErrorResponse)=>{
       alert("Failed to fetch data");
     }
   );
}
RoundTrip(){

  console.log('helloo');
  this.services.RoundTrip().subscribe(
    (res:any) =>
    {
      console.log(res);
      if(res !=null){
       this.onewayroundtrip=res; 
      }
    },
   (error:HttpErrorResponse)=>{
       alert("Failed to fetch data");
   }
 );

}
}
