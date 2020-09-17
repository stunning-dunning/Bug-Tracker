import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  public pageContent = {
    header: {
      title: 'Datamend',
      strapline: 'Capture and organize issues, assign work, and follow team activity'
    },
  }

}