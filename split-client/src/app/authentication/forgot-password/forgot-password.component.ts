import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

import { MatIcon } from "@angular/material/icon";
import { AuthenticateService } from 'src/app/helpers/services/authentication/authenticate.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm: FormGroup;

  constructor(private fb: FormBuilder,
    private _auth: AuthenticateService,
    private router:Router,
    private toastr:ToastrService) { }

  ngOnInit(): void {

    this.forgotForm = this.fb.group({
      email: [null,[
        Validators.required,
        Validators.email
      ]],
    });
  }


  forgotPassword(){
    this._auth.forgotPassword(this.forgotForm.value).subscribe((response : any) => {
      console.log(response);
      if(response.status == 200) {
        this.forgotForm.reset();
        this.router.navigateByUrl('/authenticate');
        
      }else{
        alert("Error in the file ");
        this.forgotForm.reset();
      }
    })
  }
}