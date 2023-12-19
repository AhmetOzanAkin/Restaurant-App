import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from 'src/app/DemoNgZorroAntdModule';
import { AdminRoutingModule } from './admin-routing.module';
import { AddCategoryComponent } from 'src/app/modules/admin/admin-components/add-category/add-category.component';
import { DashboardComponent } from 'src/app/modules/admin/admin-components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
