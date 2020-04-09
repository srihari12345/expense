import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root"
})
export class UtilsService {

  constructor(private Http: HttpClient) {}

  public getCountryCodes(): Observable<any> {
    return this.Http.get("./assets/code.json");
}
public getCategory(): Observable<any> {
  return this.Http.get("./assets/category.json");
}
};