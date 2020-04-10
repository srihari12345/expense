import { Component, OnInit } from "@angular/core";
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { AuthenticateService } from "src/app/helpers/services/authentication/authenticate.service";
import { Router, ActivatedRoute } from "@angular/router";
import { GroupsService } from "src/app/helpers/services/groups/groups.service";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { UtilsService } from "src/app/helpers/services/utils/utils.service";
import { SocketService } from "src/app/helpers/services/socket/socket.service";

@Component({
  selector: "app-add-expense",
  templateUrl: "./add-expense.component.html",
  styleUrls: ["./add-expense.component.scss"],
})
export class AddExpenseComponent implements OnInit {
  authToken: string;
  addExpenseForm: FormGroup;
  userId: any;
  allGroups: any;
  userName: any;
  allUsers: any = [];
  category: any = [];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {
    singleSelection: false,
    idField: "item_id",
    textField: "item_text",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };

  dropdownSettings1 = {
    singleSelection: true,
    idField: "item_id",
    textField: "item_text",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };
  groupDetail: any;
  groupId: string;

  constructor(
    private fb: FormBuilder,
    private _groups: GroupsService,
    private toastr: ToastrService,
    private _router: Router,
    private _authenticate: AuthenticateService,
    private _utils: UtilsService,
    private route: ActivatedRoute,
    private _socket: SocketService
  ) {}

  ngOnInit(): void {
    this.groupId = this.route.snapshot.paramMap.get("groupId");
    console.log(this.groupId);
    this.getGroupDetails(this.groupId);
    this.authToken = this._authenticate.getUserAuth();
    this.userId = this._authenticate.getUserInfoFromLocalStorage();

    this.addExpenseForm = this.fb.group({
      expenseName: [null, Validators.required],
      amount: [null, Validators.required],
      expensePaidBy: [null, Validators.required],
      category: [null, Validators.required],
      expenseUsersInvolved: [null, Validators.required],
    });
    this.getCategory();
  }

  onItemSelect(item: any) {
    console.log(item);
    this.selectedItems.push(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  getCategory() {
    this._utils.getCategory().subscribe((response: any) => {
      this.category = response;
    });
  }

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
          this.allUsers = this.groupDetail.group_users;
          console.log(this.allUsers);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  createExpense() {
     let req = {
       expenseName: this.addExpenseForm.value.expenseName,
       amount: this.addExpenseForm.value.amount,
       expensePaidBy: this.addExpenseForm.value.expensePaidBy,
       expenseUsersInvolved: this.addExpenseForm.value.expenseUsersInvolved,
       category: this.addExpenseForm.value.category,
       groupId: this.groupId,
     };
     this._groups.createExpense(req).subscribe(
       (response: any) => {
         console.log(response);
         if (response.status == 200 && response.data) {
             this.addExpenseForm.reset();
             this._socket.sendSocketNotification(req.expenseUsersInvolved);
             this._router.navigate(["/groups",this.groupId]);
         }
         if (response.status == 500 && response.error == true) {
           this.addExpenseForm.reset();
         }
       },
       (error) => {
         console.log(error);
       }
     );
  }

  resetForm = () => {
    console.log("in resrt form");
    this.addExpenseForm.reset();
    console.log("before call");
    this._router.navigateByUrl("/groups");
  };
}