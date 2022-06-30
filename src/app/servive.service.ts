import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { creds } from './login/Logincreds';
import {HttpClient } from '@angular/common/http'
import { addblockairline } from './add-airline/addblockairline';
import { scheduleairline } from './schedule-airline/scheduleairline';
import { registerusers } from './registration/registeruser';
import { tickets } from './booking-flight/bookingflight';

@Injectable({
  providedIn: 'root'
})
export class ServiveService {
  cancelTicket(adddata: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient:HttpClient ) { }

   public adminlogin(data:any):Observable<any>{
    var obj=new creds();
    const headers={'content-type' :'application/json'}
    obj.Email=data.email;
    obj.Password=data.Password;
    return this.httpClient.post<any>('http://localhost:42451/api/Login/AdminLogin',JSON.stringify(obj),{'headers':headers}) 
   }
   public AddAirline (adddata:any):Observable<any>{
    var objaddblock= new addblockairline();
    var tokevar= localStorage.getItem('token');
     const headers={'content-type' :'application/json',Authorization:`Bearer ${tokevar}`}
  
    objaddblock.Airlineid= adddata.airlineid;
    objaddblock.Airlinename= adddata.airlinename;
    return this.httpClient.post('http://localhost:42451/api/Admin/Addairline',JSON.stringify(objaddblock),{'headers':headers})
   }

   public scheduleflight(airlinedata:any):Observable<any>
{
  var schedule = new scheduleairline();
  schedule.AirlineId= airlinedata.airlineid;
  schedule.Flightnumber= airlinedata.flightnumber;
  schedule.Fromplace= airlinedata.fromplace;
  schedule.ToPlace= airlinedata.toplace;
  schedule.StartDatetime= airlinedata.startdate;
  schedule.EndDatetime= airlinedata.enddate;
  schedule.ScheduledDay= airlinedata.scheduledayss;
  schedule.InstrumentUsed= airlinedata.instrument;
  schedule.TotalBcseats= airlinedata.bcs;
  schedule.TotalNbcseats= airlinedata.nbcs;
  schedule.Ticketcharge= airlinedata.tktcost;
  schedule.Numberofrows= airlinedata.noofrows;
  schedule.Meal= airlinedata.meal;
  var tokevar= localStorage.getItem('token');
   const headers={'content-type' :'application/json',Authorization:`Bearer ${tokevar}`}
  return this.httpClient.post<any>('http://localhost:42451/api/Admin/Scheduleairline',JSON.stringify(schedule),{'headers':headers});
}

BlockFlight(AirlineId:String):Observable<any>{
  var jwtToken = localStorage.getItem('token');
  const headers = ({
    'content-type': 'application/json',
    Authorization: `Bearer ${jwtToken}`
  });
  return this.httpClient.delete('http://localhost:42451/api/Admin/blockAirline?AirlineId=' + AirlineId,{headers:headers});
}

public registeruser(datas:any):Observable<any>{
  var Regi = new registerusers();
  Regi.Email = datas.Email;
  Regi.Username = datas.Username;
  Regi.Password = datas.Password;
  Regi.Gender = datas.Gender;
  Regi.Phonenumber = datas.Phonenumber;
  console.log(datas);
   const headers={'content-type' :'application/json'}
    return this.httpClient.post<any>('http://localhost:21350/api/User/UserRegistration',JSON.stringify(Regi),{'headers':headers}) 
  }
 
  public Bookticketss(datass:any):Observable<any>
  {  
    var Book = new tickets();
    Book.Username = datass.Username;
    Book.Bookingdate = datass.Bookingdate;
    Book.Flightnumber = datass.Flightnumber;
    Book.PassengerEmail = datass.PassengerEmail;
    Book.PassengerName = datass.PassengerName;
    Book.Optformeal = datass.Optformeal;
    Book.Seatnumbers = datass.Seatnumbers;
    Book.Pnrnumber = 1234;
    Book.Useremail = datass.Useremail;
    Book.Numberofseats = datass.Numberofseats;
    console.log(datass);
    const headers={'content-type' :'application/json'}
    return this.httpClient.post<any>('http://localhost:21350/api/User/Ticketbook',JSON.stringify(Book),{'headers':headers});
  }

  public gettickethistory(data:any):Observable<any>{
    const headers={'content-type' :'application/json'}
   return this.httpClient.get<any>('http://localhost:21350/api/user/GetBookinghistory?Email='+data,{'headers':headers});
  }
  
  public sourcedestination(data:any):Observable<any>{
    const headers={'content-type' :'application/json'}
   return this.httpClient.get<any>('http://localhost:21350/api/user/SearchSourceDestination?Source='+data.source+'&Destination='+data.Destination,{'headers':headers});
  }

  public RoundTrip():Observable<any>{
    const headers={'content-type' :'application/json'}
   return this.httpClient.get<any>('http://localhost:21350/api/user/RoundTrip?RoundTrip=yes',{'headers':headers});
  }
  
  
  public Oneway():Observable<any>{
    const headers={'content-type' :'application/json'}
   return this.httpClient.get<any>('http://localhost:21350/api/user/Oneway?Oneway=yes',{'headers':headers});
  }

  public Search(data:any):Observable<any>{
    const headers={'content-type' :'application/json'}
   return this.httpClient.get<any>('http://localhost:21350/api/user/Datetimesearch?date='+data.date,{'headers':headers});
  }
  
  


  CancelTicket(Pnrnumber:String):Observable<any>{
    const headers={'content-type' :'application/json'}
    return this.httpClient.delete('http://localhost:21350/api/User/CancelTicket?Pnrnumber='+Pnrnumber,{'headers':headers});
  
  }

  




}

 

 











   

