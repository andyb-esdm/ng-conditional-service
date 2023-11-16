import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects(): Observable<Project[]> {
    const projects = [
      { uid: 'id1', name: 'Project 1' },
      { uid: 'id2', name: 'Project 2' },
      { uid: 'id3', name: 'Project 3' },
      { uid: 'id4', name: 'Project 4' },
      { uid: 'id5', name: 'Project 5' },
      { uid: 'id6', name: 'Project 6' },
    ];
    return of(projects);
  }
}
