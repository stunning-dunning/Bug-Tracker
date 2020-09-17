import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectDataService } from '../project-data.service';
import { Project } from '../project';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private projectDataService: ProjectDataService,
    private route: ActivatedRoute
  ) { }

  public newProject: Project;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('projectId')
          return this.projectDataService.getProjectById(id);
        })
      )
      .subscribe((newProject: Project) => {
        this.newProject = newProject;
        // console.log("description", newProject.description);
        this.pageContent.header.title = newProject.name;
      });
  }

  public pageContent = {
    header: {
      title: '',
      strapline: ''
    },
  };
}