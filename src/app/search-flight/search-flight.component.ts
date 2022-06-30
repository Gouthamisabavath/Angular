import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  sourcedest()
  {
     this.router.navigate(["sourceDestination"])
  }

  roundtrip()
  {
     this.router.navigate(["searchroundTrip"])
   }
    
   searchbydate()
   {
     this.router.navigate(["searchBydate"])
   }


}
