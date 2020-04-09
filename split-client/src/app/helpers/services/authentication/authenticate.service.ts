import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private _http:HttpClient
    ) { }

  signup(req: {
    firstName: any;
    lastName: any;
    email: any;
    phoneNumber: any;
    password: any;
  }) {
    return this._http.post(
      environment.BASE_URL + environment.API_VERSION + environment.APIS.SIGNUP,
      req
    ).map(response => response);
  }

  signin(req: any) {
    return this._http.post(
      environment.BASE_URL + environment.API_VERSION + environment.APIS.SIGNIN,
      req
    ).map(response => response);
  }

  forgotPassword(req: { email: string }) {
    const params = new HttpParams().set("email", req.email);
    return this._http.post(
      environment.BASE_URL +
        environment.API_VERSION +
        environment.APIS.FORGOTPASSWORD,
      req
    ).map(response => response);
  } 

  public updatePassword(req): Observable<any>{

    const params = new HttpParams()
      .set('validationToken', req.validationToken)
      .set('password', req.password)

      return this._http.put(
        environment.BASE_URL +
          environment.API_VERSION +
          environment.APIS.RESETPASSWORD,
        params
      ).map(response => response);
  }//end updatePassword


  logout(userId, authToken): Observable<any> {
    return this._http.post(
      `${environment.BASE_URL +
        environment.API_VERSION}${userId}/logout?authToken=${authToken}`,
      {}
    ).map(response => response);
  }

  public setUserInfoInLocalStorage = (req: any) => {
    localStorage.setItem("userInfo", JSON.stringify(req));
  };

  public setAuthToken = req => {
    localStorage.setItem("auth", req);
  };

  public getUserInfoFromLocalStorage: any = () => {
    return JSON.parse(localStorage.getItem("userInfo"));
  };

  public getUserAuth = () => {
    return localStorage.getItem("auth");
  };

  public setAllUsersInfoInLocalStorage =(req:any)=>{
    localStorage.setItem("allUsersInfo",JSON.stringify(req));
  };

  public getAllUsersInfoFromLocalStorage: any = () => {
    return JSON.parse(localStorage.getItem("allUsersInfo"));
  };


  public getUsers(authToken): Observable<any> {
    return this._http.get(
      `${environment.BASE_URL +
        environment.API_VERSION}view/all?authToken=${authToken}`
    );
  }


}
