import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { ScheduleAirlineComponent } from './schedule-airline/schedule-airline.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookingFlightComponent } from './booking-flight/booking-flight.component';
import { TickethistoryComponent } from './tickethistory/tickethistory.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SourceDestinationComponent } from './source-destination/source-destination.component';
import { SearchoneRoundTripComponent } from './searchone-round-trip/searchone-round-trip.component';
import { SearchByDateComponent } from './search-by-date/search-by-date.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { BlockFlightComponent } from './block-flight/block-flight.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'addairline',component:AddAirlineComponent},
  {path:'scheduleAirline',component:ScheduleAirlineComponent},
  {path:'registerusers',component:RegistrationComponent},
  {path:'BookingFlight',component:BookingFlightComponent},
  {path:'tickethistory',component:TickethistoryComponent},
  {path:'SearchFlight',component:SearchFlightComponent},
  {path:'sourceDestination',component:SourceDestinationComponent},
  {path:'searchroundTrip',component:SearchoneRoundTripComponent},
  {path:'searchBydate',component:SearchByDateComponent},
  {path:'CancelTicket',component:CancelTicketComponent},
  {path:'BlockFlight',component:BlockFlightComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
