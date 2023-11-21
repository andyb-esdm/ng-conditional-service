import { Component, Input } from '@angular/core';
import { ListSelectionService } from '../list-selection.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css']
})
export class ProjectListItemComponent {
  @Input() project!: Project;
  selected = false;
  serviceRef = '';
  constructor(private listSelectionService: ListSelectionService) {
    this.serviceRef = listSelectionService.name;
  }

}
