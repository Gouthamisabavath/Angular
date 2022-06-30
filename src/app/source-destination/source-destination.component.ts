import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiveService } from '../servive.service';

@Component({
  selector: 'app-source-destination',
  templateUrl: './source-destination.component.html',
  styleUrls: ['./source-destination.component.css']
})
export class SourceDestinationComponent implements OnInit {

   
   constructor( private services:ServiveService) { }
   
   sourcedestination :any=[];
   ngOnInit(): void {
   
   }
   Sourceform=new FormGroup({
    source:new FormControl(),
    Destination:new FormControl()
     })

   onsourcedestinationclick(data:any){
     console.log('helloo');
     this.services.sourcedestination(data).subscribe(
       (res:any) =>
       {
         console.log(res);
         if(res !=null){
          this.sourcedestination=res; 
         }
       },
      (error:HttpErrorResponse)=>{
        alert("Failed to Fetch data");
      }
    );
      }
    }
