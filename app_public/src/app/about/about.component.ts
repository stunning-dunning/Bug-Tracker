import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header : {
      title : 'About Datamend',
      strapline : 'Bug Tracking Solution'
    },
    content : 'Datamend was created to help people track bugs to develop and maintain applications.\n\nDatamend is a centralized tracking system logging errors during the software development cycle, providing accountability by assigning software anomalies directly to team members.  Delegating software development work among team members is crucial in large projects.\n\nSoftware developers depend on Datamend to give visibilty on the overall direction of the project, allowing implementation of timely corrective meaures, makiing sure high-quality products are delivered on time and within budget.'
  };

}