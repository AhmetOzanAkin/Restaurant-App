import { Component } from '@angular/core';
import { AdminService } from '../../admin-services/admin.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  categories: any = []; 
  validateForm!: FormGroup;
  size: NzButtonSize = 'large';
  isSpinning: boolean;

  constructor(private adminService: AdminService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title: [null, [Validators.required]],
    });
    this.getAllCategories();
  }

    submitForm() {
      
      console.log('Form submitted');
      console.log('Form valid:', this.validateForm.valid); // Debugging için eklendi
      console.log('Title value:', this.validateForm.get(['title'])!.value); // Debugging için eklendi
      this.isSpinning = true;
      this.categories = [];
      const title = this.validateForm.get(['title'])!.value;
      this.adminService.getAllCategoriesByTitle(title).subscribe((res) => {
        console.log(res);
        res.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
          this.categories.push(element);
          this.isSpinning = false;
        });
      });
    }
    getAllCategories() {
      this.categories = [];
      this.adminService.getAllCategories().subscribe((res) => {
        res.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
          this.categories.push(element);
        });
      });
    }
    I

  }
