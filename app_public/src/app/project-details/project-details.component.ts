import { Component, OnInit, Input } from '@angular/core';
import { Project, Bug } from '../project';
import { ProjectDataService } from '../project-data.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  public newBug: Bug = {
    owner: '',
    description: '',
    status: 'Open '
  };

  @Input() project: Project;

 

  public formVisible: boolean = false;
  public formError: string;

  constructor(private projectDataService: ProjectDataService) { }

  ngOnInit() {
  }

  private formIsValid(): boolean {
    console.log("form is valid");
    console.log(this.newBug.owner, this.newBug.status, this.newBug.description);
    if (this.newBug.owner && this.newBug.description && this.newBug.status) {
      return true;
    } else {
      return false;
    }
  }

  public onChange(val){
    console.log("val is:", val);
  }

  public onBugSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
      console.log("form");
      this.projectDataService.addBugById(this.project._id, this.newBug)
        .then((bug: Bug) => {
          let bugs = this.project.description;
          bugs.unshift(String(bug));
          this.project.description = bugs;
          this.resetAndHideBugForm();
        });
    } else {
      console.log("eror");
      this.formError = 'All fields requried, please try again';
    } 
  }

  private resetAndHideBugForm(): void {
    this.formVisible = false;
    this.newBug.owner = '';
    this.newBug.description = '';
    this.newBug.status = 'open';
  }
}