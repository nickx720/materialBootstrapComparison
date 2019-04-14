import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableComponent } from './table/table.component';
import { SpinnerComponent } from './spinner/spinner.component';

const routes: Routes = [
  { path: 'side-bar', component: SidenavComponent},
  { path: 'table', component: TableComponent},
  { path: 'spinner', component: SpinnerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
