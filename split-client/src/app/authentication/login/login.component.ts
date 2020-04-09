import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

import { MatIcon } from "@angular/material/icon";
import { UtilsService } from 'src/app/helpers/services/utils/utils.service';
import { AuthenticateService } from 'src/app/helpers/services/authentication/authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public toggle : boolean = true;
  signInForm: FormGroup;
  signUpForm: FormGroup;
  hide: Boolean = true;
  countryCodes: any = [];
  constructor(private fb: FormBuilder,
    private _utils: UtilsService,
    private _auth: AuthenticateService,
    private router:Router,
    private toastr:ToastrService) { 
    
  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: [null,[
        Validators.required,
        Validators.email
      ]],
      password: [null,Validators.required]
    });
    this.signUpForm = this.fb.group({
      firstName: [null,Validators.required],
      lastName: [null,Validators.required],
      email: [null,[
        Validators.required,
        Validators.email
      ]],
      code: [null,Validators.required],
      phoneNumber: [null,Validators.required],
      password: [null,Validators.required],
    })
    this.getCountryCodes();
    this.showMenu('signin');
  }

  getCountryCodes(){
this._utils.getCountryCodes().subscribe((response: any) => {
  this.countryCodes = response;
})
  }

  signUp(){
    let req = {
      firstName: this.signUpForm.value.firstName,
      lastName: this.signUpForm.value.lastName,
      email: this.signUpForm.value.email,
      phoneNumber:'+'+ this.signUpForm.value.code+'-'+this.signUpForm.value.phoneNumber,
      password: this.signUpForm.value.password,
      
    }

    console.log(req);



    this._auth.signup(req).subscribe((response : any) => {
      console.log(response);
      if(response.status == 200) {
        setTimeout(() => {
        //this.getSignIn();
      }, 1000);
        
      }else{
        alert("Error in the file ");
        this.signUpForm.reset();
      }
    })
  }

  signIn() {
    this._auth.signin(this.signInForm.value).subscribe((response: any) => {
      console.log(response);
      if (response.status == 200) {
        this._auth.setUserInfoInLocalStorage(response.data.userDetails);
        this._auth.setAuthToken(response.data.authToken);
       
        //this._comm.emitChange(true);
        this.router.navigate(["/groups"]); //redirects
      } else {
        error_message => {
          if (error_message.status == 404) {
            this.toastr.warning("Login Failed");
          } else if (error_message.status == 400) {
            this.toastr.warning("Login Failed", "Wrong Password");
          } else {
            this.toastr.error("Some Error Occurred", "Error!");
          }
        }; 
      }
    });
  }

  showMenu(menu:string){

    if(menu == 'signin'){
      this.toggle = true;
    }else if(menu == 'signup'){
      this.toggle = false;
    }

    if(this.toggle){
      this.signInForm.reset();
    }else{
      this.signUpForm.reset();
    }
  }

}