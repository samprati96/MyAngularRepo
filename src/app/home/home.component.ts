import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps;

  constructor(public http:HttpClient,private service:DataService) 
  { 
    
  }

  ngOnInit() 
  {
    let obeservableResult=this.service.select();
    
    obeservableResult.subscribe((result)=>{
        console.log(result);
        this.emps=result;
    });
  }



}
