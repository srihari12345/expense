import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { AuthenticateService } from "../services/authentication/authenticate.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _auth: AuthenticateService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let token = this._auth.getUserAuth();
    let info = this._auth.getUserInfoFromLocalStorage();
    if (token != null && info != null && token && info) {
      return true;
    }
    this.router.navigate(["/authenticate"]);
    return false;
  }
}