import { Component, OnInit } from "@angular/core";
import { AuthenticateService } from "src/app/helpers/services/authentication/authenticate.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { NotificationsService } from 'src/app/helpers/services/notifications/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  userId: any;
  authToken: string;
  unreadNotifications: any = [];
  allNotifications: any = [];
  constructor(    private _router: Router,
    private _notification: NotificationsService,
    private _authenticate: AuthenticateService) { }

  ngOnInit(): void {
    this.authToken = this._authenticate.getUserAuth();
    this.userId = this._authenticate.getUserInfoFromLocalStorage();
    this.getNotificationsById();
  }
  getNotificationsById = () => {
    this._notification.fetchNotificationById(this.userId.userId).subscribe(resp => {
      this.allNotifications = [];
      this.unreadNotifications = [];
      if(resp.message == 'Notifications Found' && resp.status == 200 && resp.data.length > 0){
        this.allNotifications = resp.data;
        resp.data.forEach((element,index) => {
          if(!element.isSeen){
            this.unreadNotifications.push(element);
          }
        });
      }
    })
  }

  Notifications = () => {
    this.getNotificationsById();
  };

  MarkNotificationSeen = (id) => {
    this._notification.updateNotification(id).subscribe(resp => {
      console.log(resp);
      if(resp.message == 'Notificatons details Updated' && resp.status == 200){
        this.getNotificationsById();
      }
    })
  }
}