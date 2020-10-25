import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';
import { ProjectDataService } from '../project-data.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  public newProject: Project = {
    _id: '',
    name: '',
    owner: '',
    description: [],
    bugs: []
  };

  public pageContent = {
    header : {
      title : 'Add Project',
      strapline : 'Tracking errors, Look for Solutions'
    },
    
  };

  @Input() project: Project;

 

  public formVisible: boolean = true;
  public formError: string;

  constructor(private projectDataService: ProjectDataService) { }

  ngOnInit() {
  }

  private formIsValid(): boolean {
    console.log("form is valid");
    console.log(this.newProject.name, this.newProject.owner, this.newProject.description);
    if (this.newProject.name && this.newProject.owner && this.newProject.description) {
      return true;
    } else {
      return false;
    }
  }

  public onChange(val){
    console.log("val is:", val);
  }

  public onProjectSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
      console.log("form");
      this.projectDataService.addProjectById(this.newProject)
        .then((project: Project) => {
          this.resetAndHideProjectForm();
        });
    } else {
      console.log("eror");
      this.formError = 'All fields requried, please try again';
    } 
  }

  private resetAndHideProjectForm(): void {
    this.formVisible = false;
    this.newProject.name = '';
    this.newProject.owner = '';
    this.newProject.description = [];
  }
}