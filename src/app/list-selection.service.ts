import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable()
export class ListSelectionService {

  private items: Project[] = [];
  private selectedItems: Project[] = [];

  private selectedItemsSubject = new BehaviorSubject<Project[]>([]);
  selectedItems$ = this.selectedItemsSubject.asObservable();

  name = '';

  constructor() {
    this.name = Math.random().toString();
  }

  setName(name: string) {
    this.name = name;
  }

  setItems(items: Project[]): void {
    this.items = items;
  }

  private isItemSelected(item: Project) {
    return this.selectedItems.some(selectedItem => selectedItem === item);
  }

  isItemSelected$(item: Project): Observable<boolean> {
    return this.selectedItems$.pipe(
      map(selectedItems => selectedItems.some(selectedItem => selectedItem === item))
    );
  }

  toggleSelection(item: Project) {

  }
}
