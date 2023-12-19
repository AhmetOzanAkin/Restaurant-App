import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from 'src/app/modules/admin/admin-components/add-category/add-category.component';
import { DashboardComponent } from 'src/app/modules/admin/admin-components/dashboard/dashboard.component';
import { GetReservationsComponent } from 'src/app/modules/admin/admin-components/get-reservations/get-reservations.component';
import { PostProductComponent } from 'src/app/modules/admin/admin-components/post-product/post-product.component';
import { UpdateProductComponent } from 'src/app/modules/admin/admin-components/update-product/update-product.component';
import { ViewProductsComponent } from 'src/app/modules/admin/admin-components/view-products/view-products.component';


const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "category", component: AddCategoryComponent},
  {path: ":categoryId/product", component: PostProductComponent},
  {path: ":categoryId/products", component: ViewProductsComponent},
  {path: "product/:productId", component: UpdateProductComponent},
  {path: "reservations", component: GetReservationsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
