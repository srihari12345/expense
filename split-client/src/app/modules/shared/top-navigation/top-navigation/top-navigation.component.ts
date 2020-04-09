import { Component, OnInit, Input, SimpleChanges } from "@angular/core";
//import { Cookie } from "ng2-cookies";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { SocketService } from "../../../../helpers/services/socket/socket.service";
import { CommunicationService } from "src/app/helpers/services/core/communication.service";
import { AuthenticateService } from "../../../../../app/helpers/services/authentication/authenticate.service";

@Component({
  selector: "app-top-navigation",
  templateUrl: "./top-navigation.component.html",
  styleUrls: ["./top-navigation.component.scss"]
})
export class TopNavigationComponent implements OnInit {
  @Input() active: string;

  authToken: string;
  userId: string;
  userName: string;
  activeDashBoard: any;
  notificationCount: any = 0;
  public isLoggedIn: Boolean = false;
  isUserDataStored: any;
  fetchToken: string;
  constructor(
    private _comm: CommunicationService,
    private _auth: AuthenticateService,
    private router: Router,
    private toastr: ToastrService,
    private socket: SocketService
  ) {
    this._comm.changeEmitted.subscribe(resp => {
      console.log(resp);
      if (resp === true) {
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
    });
    this.isUserDataStored = this._auth.getUserInfoFromLocalStorage();
    if (this.isUserDataStored && this.isUserDataStored.userId != null) {
      this.userId = this.isUserDataStored.userId;
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
    this.fetchToken = this._auth.getUserAuth();
    if(this.fetchToken){
      this.authToken = this.fetchToken;
    }else{
      this.isLoggedIn = false;
    }
    this.socket.setUser(this.fetchToken);
    this.socket.receiveSocketNotification().subscribe(resp => {
      this.notificationCount = 0;
      console.log("socket resposne received",resp); 
      resp.forEach(element => {
        if(element.item_id == this.userId){
          console.log("this is the user who receives notification",element);
          this.notificationCount++;
        }
      });
    })
    console.log("notification count", this.notificationCount);
  }

  ngOnInit(): void {
    this.socket.setUser(this.fetchToken);
    this.isUserDataStored = this._auth.getUserInfoFromLocalStorage();
    if (this.isUserDataStored && this.isUserDataStored.userId != null) {
      this.userId = this.isUserDataStored.userId;
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
    this.fetchToken = this._auth.getUserAuth();
    if(this.fetchToken){
      this.authToken = this.fetchToken;
    }else{
      this.isLoggedIn = false;
    }
    this.activeDashBoard = this.active;
    this.socket.receiveSocketNotification().subscribe(resp => {
      this.notificationCount = 0;
      console.log("socket resposne received",resp);
      resp.forEach(element => {
        if(element.item_id == this.userId){
          console.log("this is the user who receives notification",element);
          this.notificationCount++;
        }
      });
    })
    console.log("notification count", this.notificationCount);
  }

  public logoutFunction = () => {
    this.authToken = this._auth.getUserAuth();
    this._auth.logout(this.userId, this.authToken).subscribe(
      response => {
        if (response.status === 200) {
          localStorage.removeItem("userInfo");
          localStorage.removeItem("auth");
          this._comm.emitChange(false);
         this.socket.disconnectedSocket(); 
        this.socket.exitSocket(); 
          this.router.navigate(["/authenticate"]); 
        } else {
          this.toastr.error(response.message, "Error!");
        } // end condition
      },
      err => {
        if (err.status == 404) {
          this.toastr.warning(
            "Logout Failed",
            "Already Logged Out or Invalid User"
          );
          this.router.navigate(["/authenticate"]);
        } else {
          this.toastr.error("Some Error Occurred", "Error!");
        }
      }
    );
  };
  ngOnChanges(changes: SimpleChanges) {
    this.activeDashBoard = changes.active;
  }
}