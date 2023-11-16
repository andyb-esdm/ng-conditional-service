import { Component, Optional, SkipSelf } from '@angular/core';
import { ProjectService } from '../project.service';
import { ListSelectionService } from '../list-selection.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
  providers: [{
    provide: ListSelectionService,
    useFactory: (parentService: ListSelectionService) => parentService || new ListSelectionService(),
    deps: [[new Optional(), new SkipSelf(), ListSelectionService]]
  }]
})
export class ProjectListComponent {
  constructor(private projectService: ProjectService) { }
  projects$ = this.projectService.getProjects();

}
