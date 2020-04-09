import { Component, OnInit } from "@angular/core";
import { AuthenticateService } from "src/app/helpers/services/authentication/authenticate.service";
import { ToastrService } from "ngx-toastr";
import { GroupsService } from "src/app/helpers/services/groups/groups.service";
import { Router } from "@angular/router";
import { SocketService } from "../../../helpers/services/socket/socket.service";

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.scss"],
})
export class GroupsComponent implements OnInit {
  userId: any;
  authToken: string;
  allGroups: any;
  onlineUserList: any[];

  constructor(
    private _authenticate: AuthenticateService,
    private toastr: ToastrService,
    private _groups: GroupsService,
    private _router: Router,
    private socket: SocketService
  ) {}

  ngOnInit(): void {
    this.authToken = this._authenticate.getUserAuth();
    this.userId = this._authenticate.getUserInfoFromLocalStorage();
    this.getMyGroups();
  }

  getMyGroups: any = () => {
    this._groups.getAllGroups(this.userId.userId, this.authToken).subscribe(
      (response) => {
        console.log(response);
        if (response.error == true && response.status == 404) {
          this.toastr.warning(response.message, "");
        } else if (response.status == 200 && response.data.length > 0) {
          this.allGroups = response.data;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  deleteGroup = (id) => {
    this._groups.deleteGroup(id).subscribe((res) => {
      console.log(res);
      this.getMyGroups();
    });
  };

  groupDetails = (id) => {
    this._groups.groupDetails(id).subscribe((res) => {
      console.log(res);
      this._router.navigate(["./groups/" + id]);
      this.getMyGroups();
    });
  };
}
