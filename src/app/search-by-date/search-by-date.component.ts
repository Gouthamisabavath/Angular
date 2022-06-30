import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ServiveService } from '../servive.service';

@Component({
  selector: 'app-search-by-date',
  templateUrl: './search-by-date.component.html',
  styleUrls: ['./search-by-date.component.css']
})
export class SearchByDateComponent implements OnInit {
  searchbydate:any=[];
  constructor(private services :ServiveService) { }

  ngOnInit(): void {
  }

  searchbydateform=new FormGroup({
    date:new FormControl()
  })
  
  Search(data:any){
    this.services.Search(data).subscribe((res:any) => {console.log(res)  
      if(res !=null) {this.searchbydate=res;}
      },
      (error:HttpErrorResponse)=>{
        alert("Failed to fetch data");
    }
    );
    }
  }
    
  


