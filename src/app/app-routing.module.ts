import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarEditComponent } from './car-edit/car-edit.component';

const routes: Routes = [
  { path: 'cars', component: CarsListComponent },
  //{ path: 'smartphones/:id', component: SmartphoneDetailComponent },
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'edit/:id', component: CarEditComponent },
 { path: 'create', component: CarCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
