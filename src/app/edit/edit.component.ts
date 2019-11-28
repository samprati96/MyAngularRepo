import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp={"No":"","Name":"","Age":""};
  constructor(private route:ActivatedRoute,
    private router:Router,
    public service:DataService) 
  { }

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
         let No=result.get("No");

         let observableResult=this.service.selectByNo(No);
         observableResult.subscribe((data)=>{
          
          this.emp=data[0];
         });
    });
  }
  Update()
  {
    let obsRes=this.service.update(this.emp);

    obsRes.subscribe((res)=>{

      this.router.navigate(['/home']);
    });

  }

}
