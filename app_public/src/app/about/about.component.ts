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
    content : 'Datamend was created to help people track bugs to develop and maintain applications.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nDolore nisi fugiat ipsum ex occaecat esse nostrud nulla. Adipisicing nisi minim esse labore ea reprehenderit nisi minim et. Enim enim enim ex esse exercitation cupidatat deserunt sit Lorem sunt do tempor excepteur consectetur.'
  };

}