import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../project-data.service';

export class Project {
  _id: string;
  name: string;
  owner: string;
  description: string[];
}

export class Bug {
  owner: string;
  description: string;
  status: string;
  severity: string;
}

@Component({
  selector: 'app-open-bugs',
  templateUrl: './open-bugs.component.html',
  styleUrls: ['./open-bugs.component.css']
})
export class OpenBugsComponent implements OnInit {

  constructor(
    private projectDataService: ProjectDataService) { }

  public projects: Project[]
  
  public bugs: Bug[]

  public message: string;

  ngOnInit(): void {
    this.getProjects();
  }

  public pageContent = {
    header : {
      title : 'Open Bugs',
      strapline : 'Active Projects with Errors'
    },
    content : ''
  };

  private getBug(): void {
    this.message = 'Getting your project...';
    this.projectDataService.getBugs()
      .then(foundBugs => {this.bugs = foundBugs})
    
  }

  private getProjects(): void {
    this.message = 'Searching for projects';
    this.projectDataService
      .getProjects()
        .then(foundProjects => {
          this.message = foundProjects.length > 0 ? '' : 'No projects found';
          this.projects = foundProjects;
        });
  }

  private showError(error: any): void {
    this.message = error.message;
  }

  private noBug(): void {
    this.message = 'Geolocation not supported by this browser';
  }

}
