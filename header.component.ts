import { Component, OnInit } from '@angular/core';
import { AnalyticsServiceService } from '../analytics-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  year = [];
  term;
 
  constructor(private ser: AnalyticsServiceService) { }

  ngOnInit() {
    this.getAcademicYear();
    this.getTerm()
  }
    getAcademicYear() {
      this.ser.getAcademicYear().subscribe(
        res => {
          console.log(res)
        let data = res["year"];
        for(let obj of data){
           this.year.push([obj["AcademicYear"]]);
         }
        }
        
      );
  }
  getTerm()
  {
    this.ser.getTerm().subscribe(res => {
      this.term = res;
    })
  }
  
 
}