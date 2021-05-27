import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarComponent} from './components/car/car.component';
import {CustomerComponent} from './components/customer/customer.component';
import {NavbarComponent} from './components/admin-panel/navbar/navbar.component';
import {RentalComponent} from './components/rental/rental.component';
import {CarDetailComponent} from './components/car-detail/car-detail.component';
import {CarImageComponent} from './components/car-image/car-image.component';
import {PaymentComponent} from './components/payment/payment.component';

const routes: Routes = [
  {path: "", pathMatch: "full", component:CarComponent},

  {path: "cars", component: CarComponent},
  {path: "cars/brands/:brandId", component:CarComponent},
  {path: "cars/colors/:colorId", component:CarComponent},
  {path: "cars/singlecardetails/:carId", component:CarDetailComponent},

  {path: "payment/:carId", component: PaymentComponent},

  {path: "adminpanel", component: NavbarComponent},
  {path: "adminpanel/customers", component: CustomerComponent},
  {path: "adminpanel/rentals", component:RentalComponent},
  {path: "adminpanel/carimages", component:CarImageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
