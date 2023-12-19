import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../customer-service/customer.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-post-reservation',
  templateUrl: './post-reservation.component.html',
  styleUrls: ['./post-reservation.component.scss']
})
export class PostReservationComponent {

  isSpinning:boolean = false;
  validateForm: FormGroup;
  
TableType: string[] = [
  "Standart Masa", 
  "Kabin",
  "Toplu Masa",
  "Diş Masa",  
  "Köşe Masa", 
  "Şef Masa", 
  "Çevrilebilir Masa",
  "Köşe Masa",
  "Aile Masa", 
  "Pencere Kenari Masa",
  "Özel Yemek Masa",
  "Lounge Masa",
  "Yuvarlak Masa",
  "Özel Tasarim Masa"
  ];


  constructor(private fb:FormBuilder,
    private service: CustomerService,
    private message: NzMessageService){}

  ngOnInit(){
    this.validateForm = this.fb.group({
      tableType: [null, Validators.required],
      dateTime: [null, Validators.required],
      description: [null, Validators.required]
    })
  }

  postReservation(){
    console.log(this.validateForm.value);
    this.service.postReservation(this.validateForm.value).subscribe((res)=>{
      console.log(res);
      if(res.id != null){
        this.message.success("Reservation posted successfully", {nzDuration : 5000})
      }else{
        this.message.error("Something went wrong", {nzDuration : 5000})

      }
    })
  }

}
