import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableComponent } from './table/table.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: 'side-bar', component: SidenavComponent},
  { path: 'table', component: TableComponent},
  { path: 'spinner', component: SpinnerComponent},
  { path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
