import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { SearchProjectsComponent } from './search-projects/search-projects.component';

const routes: Routes = [
  { path: '', component: SearchProjectsComponent, pathMatch: 'full' },
  { path: 'site', component: SiteDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
