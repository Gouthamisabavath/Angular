import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiveService } from '../servive.service';

@Component({
  selector: 'app-cancel-ticket',
  templateUrl: './cancel-ticket.component.html',
  styleUrls: ['./cancel-ticket.component.css']
})
export class CancelTicketComponent implements OnInit {

  constructor(private services:ServiveService,private router:Router) { }
  Cancelform= new FormGroup({
    Pnrnumber:new FormControl('',Validators.required),
    
  })
  ngOnInit(): void {
  }

   public CancelTicketclick(data:any)  {

    this.services.CancelTicket(data.Pnrnumber).subscribe((res:any) => {console.log(res)   
      if(res.success !=null){
        alert("cancelled successfully");  
      }
    },(error:HttpErrorResponse)=>{
      alert("cancellation failed");
    }
  );
  }
}
