import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './auth-components/signup/signup.component';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';
import { LoginComponent } from './auth-components/login/login.component';
import { DashboardComponent } from './modules/admin/admin-components/dashboard/dashboard.component';
import { AddCategoryComponent } from './modules/admin/admin-components/add-category/add-category.component';
import { PostProductComponent } from './modules/admin/admin-components/post-product/post-product.component';
import { ViewProductsComponent } from './modules/admin/admin-components/view-products/view-products.component';
import { UpdateProductComponent } from './modules/admin/admin-components/update-product/update-product.component';
import { RouterModule } from '@angular/router';
import { CustomerdashboardComponent } from './modules/customer/customer-components/customerdashboard/customerdashboard.component';
import { ViewProductsByCategoryComponent } from './modules/customer/customer-components/view-products-by-category/view-products-by-category.component';
import { PostReservationComponent } from './modules/customer/customer-components/post-reservation/post-reservation.component';
import { GetAllReservationsComponent } from './modules/customer/customer-components/get-all-reservations/get-all-reservations.component';
import { GetReservationsComponent } from './modules/admin/admin-components/get-reservations/get-reservations.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    AddCategoryComponent,
    PostProductComponent,
    ViewProductsComponent,
    UpdateProductComponent,
    CustomerdashboardComponent,
    ViewProductsByCategoryComponent,
    PostReservationComponent,
    GetAllReservationsComponent,
    GetReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    [RouterModule]
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
