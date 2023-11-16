import { Component } from '@angular/core';
import { ListSelectionService } from '../list-selection.service';

@Component({
  selector: 'app-search-projects',
  templateUrl: './search-projects.component.html',
  styleUrls: ['./search-projects.component.css'],
  providers: [ListSelectionService]
})
export class SearchProjectsComponent { }
