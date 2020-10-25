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
    _id:'',
    owner: '',
    description: '',
    status: 'Open ',
    severity: 'high'
  };

  public updateNewBug: Bug = {
    _id:'',
    owner: '',
    description: '',
    status: 'Open ',
    severity: 'high'
  };

  @Input() project: Project;

 

  public formVisible: boolean = false;
  public formVisible2: boolean = false;
  public formError: string;
  public getBugId: string;

  constructor(private projectDataService: ProjectDataService) { }

  ngOnInit() {
  }

  private formIsValid(): boolean {
    console.log("form is valid");
    console.log(this.newBug.owner, this.newBug.status, this.newBug.description);
    if (this.newBug.owner && this.newBug.description && this.newBug.status && this.newBug.severity) {
      return true;
    } else {
      return false;
    }
  }

  private getDetails(bugId: string): void {
    console.log("bugid:", bugId);
    this.getBugId = bugId;
    console.log("projectid and bugid", this.project._id, bugId);
    this.projectDataService.getBugById(this.project._id, bugId)
    .then((bug: Bug)=> {
      console.log("bug details", bug);
      this.updateNewBug = bug;
      console.log("updatenewbug", this.updateNewBug);
      this.formVisible2= true;
    });
  }

  public updateBug(): void{
    //console.log("projectid bugid:", this.project._id, this.getBugId);
    //console.log("updating new bug details", this.updateNewBug);
    this.projectDataService.updateBugStatus(this.project._id, this.getBugId, this.updateNewBug)
    .then((bug: Bug) =>{
      let bugs = this.project.bugs.slice(0);
      this.project.bugs = bugs;
    });

    this.formVisible2=false;
    this.ngOnInit();
  }
  public getValue(){
    console.log("val is:" , this.newBug.status);
  }

  public onBugSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
      console.log("form", this.project.bugs);
      this.projectDataService.addBugById(this.project._id, this.newBug)
        .then((bug: Bug) => {
          let bugs = this.project.bugs.slice(0);
          bugs.unshift(bug);
          this.project.bugs = bugs;
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
    this.newBug.severity = 'high';
  }
}