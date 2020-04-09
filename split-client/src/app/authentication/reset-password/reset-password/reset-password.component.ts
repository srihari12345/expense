import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

//import for toastr
import { ToastrService } from 'ngx-toastr';
//for Service
import { AuthenticateService } from 'src/app/helpers/services/authentication/authenticate.service';
//for routing
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public validationToken: any;
  public password: any;
  public confirmPassword: any;

  constructor(
    public _auth: AuthenticateService, 
    public _route: ActivatedRoute,
    public router: Router,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.validationToken = this._route.snapshot.paramMap.get('validationToken');

  }

  public goToSignIn(): any {
    this.router.navigate(['/signin']);
  }//end of goToSign function

  public updatePasswordFunction(): any {
    if (this.password != this.confirmPassword) {
      this.toastr.warning("Password doesn't match", "Warning!");
    }
    else {
      let data = {
        validationToken: this.validationToken,
        password: this.password,
      }

      this._auth.updatePassword(data).subscribe((apiResponse) => {

        if (apiResponse.status == 200) {
          this.toastr.success("Please login", "Password Updated!");
          setTimeout(() => {
            this.goToSignIn();
          }, 1000);//redirecting to signIn page

        }
        else {
          this.toastr.error(apiResponse.message, "Error!");
        }
      },
        (error) => {
          if (error.status == 404) {
            this.toastr.warning("Password Update failed", "Please request another password reset!");
          }
          else {
            this.toastr.error("Some Error Occurred", "Error!");
          }

        });//end calling updatePassword

    }

  }//end updatePasswordFunction

}