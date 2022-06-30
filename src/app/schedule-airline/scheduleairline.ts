import { DecimalPipe } from "@angular/common";

export class scheduleairline{
       
AirlineId :string   
Flightnumber :number; 
Fromplace:string;     
ToPlace:string;     
StartDatetime :string;
EndDatetime :string; 
ScheduledDay :string;
InstrumentUsed:string;
TotalBcseats:number; 
TotalNbcseats:number;
Ticketcharge  :DecimalPipe;
Numberofrows:number;  
Meal  :string;
 }