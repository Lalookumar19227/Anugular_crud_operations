import { Component } from '@angular/core';
// import { FormGroup } from '@angular/forms';
import { CustomerService } from 'src/app/service/customer.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.css']
})
export class PostCustomerComponent {

  postCustomerForm!:FormGroup;

   constructor(private customerService:CustomerService,
    private fb:FormBuilder,
      private router:Router){


   }

   ngOnInit(){
      this.postCustomerForm=this.fb.group({
        name:[null,Validators.required],
        email:[null,[Validators.required, Validators.email]],
        phone:[null,Validators.required],
      })

   }

   postCustomer() {
     
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res)=>{
      console.log(res);
      
      this.router.navigateByUrl("");
    })
   }
  

}
