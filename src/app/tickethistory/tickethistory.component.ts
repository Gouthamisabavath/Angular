import { Component, OnInit } from '@angular/core';
import { ServiveService } from '../servive.service';

@Component({
  selector: 'app-tickethistory',
  templateUrl: './tickethistory.component.html',
  styleUrls: ['./tickethistory.component.css']
})
export class TickethistoryComponent implements OnInit {

  tickethistory :any=[];
  
 constructor( private services:ServiveService) { }

 ngOnInit(): void {
  this.gettickethistory(localStorage.getItem('email'));
 }
 gettickethistory(data:any){
   console.log('helloo');
   this.services.gettickethistory(data).subscribe(
     (res:any) =>
     {
       console.log(res);
       this.tickethistory=res;
      // console.log("These are ticket history details ",history);
     });
 }

}
