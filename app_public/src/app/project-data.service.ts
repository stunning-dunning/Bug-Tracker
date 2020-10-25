import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project, Bug } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor(private http: HttpClient) { }

  private apiBaseUrl = 'http://localhost:3000/api';
  //private apiBaseUrl = 'https://vast-brook-9050.herokuapp.com/api'  //use for production

  public addProjectById(formData:Project): Promise<Project> {
    const url: string = `${this.apiBaseUrl}/projects`;
    return this.http
      .post(url, formData)
      .toPromise()
      .then(response => response as Project)
      .catch(this.handleError);
  }

  public getProjectById(projectId: string): Promise<Project> {
    const url: string = `${this.apiBaseUrl}/projects/${projectId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Project)
      .catch(this.handleError);
  }

  public updateProjectById(projectId: string, formData:Project): Promise<Project> {
    const url: string = `${this.apiBaseUrl}/projects/${projectId}`;
    return this.http
      .put(url, formData)
      .toPromise()
      .then(response => response as Project)
      .catch(this.handleError);
  }
 
  public removeProjectById(projectId: string): Promise<Project> {
    const url: string = `${this.apiBaseUrl}/projects/${projectId}`;
    return this.http
      .delete(url)
      .toPromise()
      .then(response => response as Project)
      .catch(this.handleError);
  }
  
  public getProjects(): Promise<Project[]> {
    const url: string = `${this.apiBaseUrl}/projects`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Project[])
      .catch(this.handleError);
 }

  public getBugs(): Promise<Bug[]> {
    const url: string = `${this.apiBaseUrl}/bugs`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Bug[])
      .catch(this.handleError);
  }

  public addBugById(projectId: string, formData: Bug): Promise<Bug> {
    const url: string = `${this.apiBaseUrl}/projects/${projectId}/bugs`;
    return this.http
      .post(url, formData)
      .toPromise()
      .then(response => response as Bug)
      .catch(this.handleError);
  }

  public updateBugStatus(projectId: string, bugId: string, formData: Bug): Promise<Bug>{
    const url: string = `${this.apiBaseUrl}/projects/${projectId}/bugs/${bugId}`;
    return this.http
      .put(url, formData)
      .toPromise()
      .then(response => response as Bug)
      .catch(this.handleError);
  }

  public getBugById(projectId: string, bugId:string): Promise<Bug> {
    const url: string = `${this.apiBaseUrl}/projects/${projectId}/bugs/${bugId}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Bug)
      .catch(this.handleError);
  }

  public updateBugById(projectId: string, formData: Bug, bugId:string): Promise<Bug> {
    console.log("project id, bug id", projectId, bugId);
    console.log("formdata", formData);
    const url: string = `${this.apiBaseUrl}/projects/${projectId}/bugs/${bugId}`;
    return this.http
      .put(url, formData)
      .toPromise()
      .then(response => response as Bug)
      .catch(this.handleError);
  }

  public removeBugById(projectId: string, formData: Bug, bugId:string): Promise<Bug> {
    const url: string = `${this.apiBaseUrl}/projects/${projectId}/bugs/${bugId}`;
    return this.http
      .delete(url)
      .toPromise()
      .then(response => response as Bug)
      .catch(this.handleError);
  }

  
  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }

}