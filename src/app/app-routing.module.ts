import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarComponent} from './components/car/car.component';
import {CustomerComponent} from './components/customer/customer.component';
import {NavbarComponent} from './components/admin-panel/navbar/navbar.component';
import {RentalComponent} from './components/rental/rental.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component:CarComponent},

  {path: "adminpanel", component: NavbarComponent},
  {path: "adminpanel/customers", component: CustomerComponent},
  {path: "adminpanel/rentals", component:RentalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
