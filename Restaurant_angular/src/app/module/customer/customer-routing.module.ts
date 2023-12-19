import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerdashboardComponent } from 'src/app/modules/customer/customer-components/customerdashboard/customerdashboard.component';
import { GetAllReservationsComponent } from 'src/app/modules/customer/customer-components/get-all-reservations/get-all-reservations.component';
import { PostReservationComponent } from 'src/app/modules/customer/customer-components/post-reservation/post-reservation.component';
import { ViewProductsByCategoryComponent } from 'src/app/modules/customer/customer-components/view-products-by-category/view-products-by-category.component';

const routes: Routes = [
  {path: "dashboard", component: CustomerdashboardComponent},
  {path: ":categoryId/products", component: ViewProductsByCategoryComponent},
  {path: "reservation", component: PostReservationComponent},
  {path: "reservations", component: GetAllReservationsComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
