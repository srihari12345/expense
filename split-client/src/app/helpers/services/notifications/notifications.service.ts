import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AuthenticateService } from "../authentication/authenticate.service";

@Injectable({
  providedIn: "root"
})
export class NotificationsService {
  authToken: String = this._auth.getUserAuth();
  userId: String = this._auth.getUserInfoFromLocalStorage();
  firstName: String = this._auth.getUserInfoFromLocalStorage();

  constructor(private _http: HttpClient, private _auth: AuthenticateService) {}

  fetchNotificationById(req): Observable <any> {
    return this._http
    .get(environment.BASE_URL + environment.API_VERSION + req +"/" + environment.APIS.NOTIFICATIONS + "?authToken="+this.authToken,
    {})
    .map(response => response);
  }

  updateNotification(id): Observable <any> {
    let req = {};
    req['isSeen'] = true;
    req['notifyId'] = id;
    return this._http
    .put(environment.BASE_URL + environment.API_VERSION + id +"/" + environment.APIS.NOTIFICATIONS +"/" + environment.APIS.UPDATE + "?authToken="+this.authToken,
    req)
    .map(response => response);
  }
}
