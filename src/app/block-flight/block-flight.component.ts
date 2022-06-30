import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiveService } from '../servive.service';

@Component({
  selector: 'app-block-flight',
  templateUrl: './block-flight.component.html',
  styleUrls: ['./block-flight.component.css']
})
export class BlockFlightComponent implements OnInit {

  blockFlightForm = new FormGroup({
    AirlineId: new FormControl('',Validators.required),
  });

  constructor(private service:ServiveService) { }

  ngOnInit(): void {
  }

  blockFlight(data:any){
    this.service.BlockFlight(data.AirlineId).subscribe((res:any) => { console.log(res);
      if(res.success !=null){
            alert('Airline is blocked successfully');
          }
        },
        (error:HttpErrorResponse)=>{
          alert("Block Cancelled")
         
        }
        );
      }
    }