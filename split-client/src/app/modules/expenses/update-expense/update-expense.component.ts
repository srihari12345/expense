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

@Component({
  selector: "app-update-expense",
  templateUrl: "./update-expense.component.html",
  styleUrls: ["./update-expense.component.scss"],
})
export class UpdateExpenseComponent implements OnInit {
  authToken: string;
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
  expenseDetail: any;
  gid: any;
  expenseId: string;
  updateExpenseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _groups: GroupsService,
    private toastr: ToastrService,
    private _router: Router,
    private _authenticate: AuthenticateService,
    private _utils: UtilsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.expenseId = this.route.snapshot.paramMap.get("expenseId");
    console.log(this.expenseId);
    this.groupId = this.route.snapshot.paramMap.get("groupId");
    console.log(this.groupId);
    this.getGroupDetails(this.groupId);
    this.authToken = this._authenticate.getUserAuth();
    this.userId = this._authenticate.getUserInfoFromLocalStorage();

    this.getExpenseDetails(this.expenseId)

    this.updateExpenseForm = this.fb.group({
      expenseName:[this.expenseDetail.expenseName, Validators.required],
      amount: [this.expenseDetail.amount, Validators.required],
      expensePaidBy: [this.expenseDetail.expensePaidBy, Validators.required],
      category: [this.expenseDetail.category, Validators.required],
      expenseUsersInvolved: [this.expenseDetail.expenseUsersInvolved, Validators.required],
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


  getCategory(){
    this._utils.getCategory().subscribe((response: any) => {
      this.category = response;
    })
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

  updateExpense() {
    let req = {
      expenseName: this.updateExpenseForm.value.expenseName,
      amount: this.updateExpenseForm.value.amount,
      expensePaidBy:this.updateExpenseForm.value.expensePaidBy,
      expenseUsersInvolved:this.updateExpenseForm.value.expenseUsersInvolved,
      category: this.updateExpenseForm.value.category,
      groupId: this.groupId
      
    }
    this._groups.updateExpense(req).subscribe(
      (response: any) => {
        console.log(response);
        if (response.status == 200 && response.data) {
          setTimeout(() => {
            this.updateExpenseForm.reset();
            this._router.navigateByUrl("/groups");
          }, 1000);
        }
        if (response.status == 500 && response.error == true) {
          this.updateExpenseForm.reset();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getExpenseDetails: any = () => {
    this._groups.expenseDetails(this.gid).subscribe(
      (response) => {
        console.log(response);
        if (response.error == true && response.status == 404) {
          console.log("in if");
          this.toastr.warning(response.message, "");
        } else if (response.status == 200 && response.data) {
          console.log("in else if");
          this.expenseDetail = response.data;
          console.log(response.data);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  resetForm = () => {
    console.log("in resrt form");
    this.updateExpenseForm.reset();
    console.log("before call");
    this._router.navigateByUrl("/groups");
  };
}
