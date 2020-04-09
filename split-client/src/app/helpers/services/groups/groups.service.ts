import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthenticateService } from "../authentication/authenticate.service";

@Injectable({
  providedIn: "root"
})
export class GroupsService {
  authToken: String = this._auth.getUserAuth();
  userId: String = this._auth.getUserInfoFromLocalStorage();
  firstName: String = this._auth.getUserInfoFromLocalStorage();

  constructor(private _http: HttpClient, private _auth: AuthenticateService) {}

  addGroup(req): Observable<any> {
    return this._http
      .post(
        `${environment.BASE_URL +
          environment.API_VERSION}group/createGroup?authToken=${
          this.authToken
        }`,
        req
      )
      .map(response => response);
  }

  getAllGroups(userId, authToken): Observable<any> {
    return this._http.get(
      `${environment.BASE_URL +
        environment.API_VERSION}group/${userId}/allGroup?authToken=${authToken}`
    );
  }

  deleteGroup(req): Observable <any> {
    return this._http
    .post(environment.BASE_URL + environment.API_VERSION + environment.SUB_PATH.GROUP + req + "/" + environment.APIS.DELETE + "?authToken="+this.authToken,
    {})
    .map(response => response);
  }

  groupDetails(req): Observable <any> {
    return this._http
    .get(environment.BASE_URL + environment.API_VERSION + environment.SUB_PATH.GROUP + req + "/" + environment.APIS.DETAILS + "?authToken="+this.authToken,
    {})
    .map(response => response);
  }

  updateGroup(req): Observable <any> {
    return this._http
    .post(environment.BASE_URL + environment.API_VERSION + environment.SUB_PATH.GROUP + req + "/" + environment.APIS.UPDATEGROUP + "?authToken="+this.authToken,
    {})
    .map(response => response);
  }
  createExpense(req): Observable<any> {
    return this._http
      .post(
        `${environment.BASE_URL +
          environment.API_VERSION}group/expense/createExpense?authToken=${
          this.authToken
        }`,
        req
      )
      .map(response => response);
    
  }

  deleteExpense(req): Observable <any> {
    return this._http
    .post(environment.BASE_URL + environment.API_VERSION + environment.SUB_PATH.EXPENSE + req + "/" + environment.APIS.DELETE + "?authToken="+this.authToken,
    {})
    .map(response => response);
  }

  expenseDetails(req): Observable <any> {
    return this._http
    .get(environment.BASE_URL + environment.API_VERSION + environment.SUB_PATH.GROUP + req +'/'+ environment.SUB_PATH.EXPENSE + environment.APIS.LIST + "?authToken="+this.authToken,
    {})
    .map(response => response);
  }

  updateExpense(req): Observable <any> {
    return this._http
    .get(environment.BASE_URL + environment.API_VERSION + environment.SUB_PATH.GROUP + req +'/'+ environment.SUB_PATH.EXPENSE + environment.APIS.UPDATEEXPENSE + "?authToken="+this.authToken,
    {})
    .map(response => response);
  }

}
