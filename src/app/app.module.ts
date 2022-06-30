import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServiveService } from './servive.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddAirlineComponent,
    ScheduleAirlineComponent,
    RegistrationComponent,
    BookingFlightComponent,
    TickethistoryComponent,
    SearchFlightComponent,
    SourceDestinationComponent,
    SearchoneRoundTripComponent,
    SearchByDateComponent,
    CancelTicketComponent,
    BlockFlightComponent
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,
    FormsModule
  ],
  providers: [ServiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }