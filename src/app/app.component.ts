import { Component } from '@angular/core';
import { ServiveService } from './servive.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'flightproject';
 constructor(private Allservices:ServiveService,private router:Router){}

 ngOnInit(){}
 onloginclick(){
  this.router.navigate(["login"])
  }
  onAddAirline(){
    this.router.navigate(["addairline"])
}
onSchedhuleAirline(){
  this.router.navigate(["scheduleAirline"])
}
onRegistration(){
  this.router.navigate(["registerusers"])
}
onclickBookingFlight(){
  this.router.navigate(["BookingFlight"])
}
onclickLogout(){
  this.router.navigate(["login"])  
}

onclickTicketHistory(){
  this.router.navigate(["tickethistory"])
}
onclickSearchFlight(){
  this.router.navigate(["SearchFlight"])
}
onclickCancelTicket(){
  this.router.navigate(["CancelTicket"])
}
onclickBlockFlight(){
  this.router.navigate(["BlockFlight"])
}

}


