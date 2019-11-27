import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import {ApiService, Config} from '../../service/api.service';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
​import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
​
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  public config: Array<any> 
  submitted = false;
  errorMessage = ""
  errorDiv:boolean = false;
​
  constructor(
    private formBuilder: FormBuilder,
    private apiservice:ApiService,
    public http: HttpClient,
    private router:Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ){
    this.apiservice.getConfig(this.loginForm);
  }
   
  ngOnInit() {
   this.formInit();
   
  } 
 
  formInit() {
    this.loginForm = this.formBuilder.group({
      email:    ['', Validators.required],
      password: ['', Validators.required]
  })
    
  } 
  get f() { return this.loginForm.controls; }
​
​
  onSubmit(){
    this.submitted = true;
    this.spinner.show(); 
    this.apiservice.getConfig(this.loginForm.value).subscribe(res => {
      this.spinner.hide();
      if(res){
        if(res['user']){
        this.errorDiv = true;
        this.errorMessage=res['user'];
        this.toastr.error(this.errorMessage)
        setTimeout(()=>{
        this.errorDiv = false;
         }, 3000);
       this.spinner.hide();
        }
        if(res['token']){
          localStorage.setItem('token',res.token)
          this.apiservice.token = res['token'];
          this.router.navigate(['/dashboard']);
        }
        
      }else{
        
      }
      error=>{
          console.log(error);
            this.errorDiv = true;
            this.errorMessage = error;
            this.spinner.hide();

      }
      
    })
​
  }
 
}






