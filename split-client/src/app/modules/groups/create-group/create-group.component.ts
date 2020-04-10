import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthenticateService } from "src/app/helpers/services/authentication/authenticate.service";
import { Router } from "@angular/router";
import { GroupsService } from "src/app/helpers/services/groups/groups.service";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { element } from "protractor";
import { SocketService } from "src/app/helpers/services/socket/socket.service";
@Component({
  selector: "app-create-group",
  templateUrl: "./create-group.component.html",
  styleUrls: ["./create-group.component.scss"]
})
export class CreateGroupComponent implements OnInit {
  createGroupForm: FormGroup;
  authToken: any;
  userId: any;
  allGroups: any;
  userName: any;
  allUsers: any = [];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(
    private _groups: GroupsService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private _router: Router,
    private _authenticate: AuthenticateService,
    private _socket: SocketService
  ) {}

  ngOnInit(): void {
    this.authToken = this._authenticate.getUserAuth();
    this.userId = this._authenticate.getUserInfoFromLocalStorage();
    // this.userName=this.getUsersGroup.firstName+' '+this.getUsersGroup.lastName
    this.createGroupForm = this.fb.group({
      group_name: [null, Validators.required],
      description: [null, Validators.required],
      group_users: [null, Validators.required],
      group_creatorId: [this.userId.userId, Validators.required],
      group_creatorName: [
        this.userId.firstName + " " + this.userId.lastName,
        Validators.required
      ],
      group_updater_id: [this.userId.userId, Validators.required],
      group_updater_name: [
        this.userId.firstName + " " + this.userId.lastName,
        Validators.required
      ]
    });

    this.getUsersGroup();

    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    this.selectedItems.push(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  getMyGroups: any = () => {
    this._groups.getAllGroups(this.userId.userId, this.authToken).subscribe(
      response => {
        console.log(response);
        if (response.error == true && response.status == 404) {
          this.toastr.warning(response.message, "");
        } else if (response.status == 200 && response.data.length > 0) {
          this.allGroups = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );
  };

  getUsersGroup: any = () => {
    this._authenticate.getUsers(this.authToken).subscribe(
      response => {
        console.log(response);
        if (response.error == true && response.status == 404) {
          this.toastr.warning(response.message, "");
        } else if (response.status == 200 && response.data.length > 0) {
          this.allUsers = [];
          response.data.forEach(element => {
            if (element["firstName"] != "") {
              this.allUsers.push({
                item_id: element.userId,
                item_text: element["firstName"] + " " + element["lastName"]
              });
            }
          });
        }
      },
      error => {
        console.log(error);
      }
    );
  };

  createGroup = () => {
    console.log("in this call");
    this.createGroupForm.patchValue({
      group_creatorName: this.userId.firstName + " " + this.userId.lastName,
      group_creatorId: this.userId.userId,
      group_updater_id: this.userId.userId,
      group_updater_name: this.userId.firstName + " " + this.userId.lastName
    });
    this._groups.addGroup(this.createGroupForm.value).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status == 200 && response.data) {
            this.createGroupForm.reset();
            let userIds= [];
            response.data.group_users.forEach(element => {
              userIds.push(element.item_id);
            });
            this._socket.sendSocketNotifs('create-group-notification', {group_name: response.data.group_name, group_users: userIds, groupId: response.data.groupId});
            this._router.navigateByUrl("/groups");
        }
        if (response.status == 500 && response.error == true) {
          this.createGroupForm.reset();
        }
      },
      error => {
        console.log(error);
      }
    );
  };

  resetForm = () => {
    console.log("in resrt form");
    this.createGroupForm.reset();
    console.log("before call");
    this._router.navigateByUrl("/groups");
  };
}