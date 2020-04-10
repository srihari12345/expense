import { Component, OnInit } from "@angular/core";
import { AuthenticateService } from "src/app/helpers/services/authentication/authenticate.service";
import { ToastrService } from "ngx-toastr";
import { GroupsService } from "src/app/helpers/services/groups/groups.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
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
  groupDetail: any;
  gid: String;

  constructor(
    private _authenticate: AuthenticateService,
    private toastr: ToastrService,
    private _groups: GroupsService,
    private _router: Router,
    private _socket: SocketService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.authToken = this._authenticate.getUserAuth();
    this.userId = this._authenticate.getUserInfoFromLocalStorage();
    this.getMyGroups();
    this.route.params.subscribe((params: Params) => {
      this.gid = params.id;
    });
    this.getGroupDetails();
  }

  getMyGroups: any = () => {
    this._groups.getAllGroups(this.userId.userId, this.authToken).subscribe(
      (response:any) => {
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

  getGroupDetails: any = (gid) => {
    this._groups.groupDetails(gid).subscribe(
      (response) => {
        console.log(response);
        if (response.error == true && response.status == 404) {
          console.log("in if");
          this.toastr.warning(response.message, "");
        } else if (response.status == 200 && response.data) {
          console.log("in else if");
          this.groupDetail = response.data;
          console.log(response.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  deleteGroup = (group) => {
    this._groups.deleteGroup(group).subscribe((response) => {
      if (response.status == 200 && response.data) {
        console.log(response);
        let userIds= [];
        response.data.group_users.forEach(element => {
          userIds.push(element.item_id);
        });
      this._socket.sendSocketNotifs('create-group-notification', {group_name: response.data.group_name, group_users: userIds, groupId: response.data.groupId});
      console.log(response);
      }
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