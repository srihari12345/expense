import { Component, OnInit, Inject } from "@angular/core";
import { AuthenticateService } from "src/app/helpers/services/authentication/authenticate.service";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GroupsService } from "src/app/helpers/services/groups/groups.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { SocketService } from 'src/app/helpers/services/socket/socket.service';


@Component({
  selector: "app-group-details",
  templateUrl: "./group-details.component.html",
  styleUrls: ["./group-details.component.scss"],
})
export class GroupDetailsComponent implements OnInit {
  userId: any;
  authToken: string;
  allGroups: any;
  groupDetail : any;
  gid: String;

  allUsers: any[];
  expenseDetail: any;
settleExpenseTableData = [];
  constructor(
    private _authenticate: AuthenticateService,
    private toastr: ToastrService,
    private _groups: GroupsService,
    private _router: Router,
    private fb:FormBuilder,
    private route: ActivatedRoute,
    private socket:SocketService
  ) {}

  ngOnInit(): void {
    this.authToken = this._authenticate.getUserAuth();
    this.userId = this._authenticate.getUserInfoFromLocalStorage();
    console.log("this is get group details");
    this.route.params.subscribe((params: Params) => {
      this.gid = params.id;
    });
    this.getGroupDetails(this.gid);
    this.getAllUsers();
    this.getExpenseDetails();

    this.verifyUserConfirmation();
    this.getUpdatesFromUser();
    
   
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

  getAllUsers: any = () => {
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
          this.generateSettleExpenseData(this.expenseDetail);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  // _id: "5e8b4bcd8088ef5f006e75a1"
  // expenseName: "test"
  // amount: 1000
  // updatedOn: "2020-04-06T15:33:33.000Z"
  // deletedOn: null
  // groupId: "VNlib4vqj"
  // expenseId: "eT-LkmQ2t"
  // expensePaidBy: [{_id: "5e8b4bcd8088ef5f006e75a2", item_id: "HQ_cnFKBk", item_text: "sri "}]
  // category: [{_id: "5e8b4bcd8088ef5f006e75a3", item_id: "1", item_text: "Petrol/Gas"}]
  // createdOn: "2020-04-06T15:33:33.000Z"
  // expenseUsersInvolved: [{_id: "5e8b4bcd8088ef5f006e75a4", item_id: "HQ_cnFKBk", item_text: "sri "},…]
  // 0: {_id: "5e8b4bcd8088ef5f006e75a4", item_id: "HQ_cnFKBk", item_text: "sri "}
  // 1: {_id: "5e8b4bcd8088ef5f006e75a5", item_id: "qYYq4Y79b", item_text: "sri "}

  generateSettleExpenseData = (data) => {
    this.settleExpenseTableData = [];
    if(data.length > 0) {
      data.forEach(element => {
        let usersVal = "";
        if(element.expenseUsersInvolved.length > 0 ){
          let len = element.expenseUsersInvolved.length;
          element.expenseUsersInvolved.forEach((element,index) => {
            if((index+1) == len){
              usersVal += usersVal + element.item_text;
            }else{
              usersVal += usersVal + element.item_text + " and ";
            }

          });
        }
        this.settleExpenseTableData.push({
          toPayToCreator: usersVal + " has to pay to "+ element.expensePaidBy[0].item_text + " INR "+element.amount + " only"
        })
      });
      console.log(this.settleExpenseTableData);
    }
  } 


  deleteExpense = (id) => {
    this._groups.deleteExpense(id).subscribe(res=>{
      this.getExpenseDetails(this.gid);
    })
  }

  redirectToCreateExpense = () => {
    this._router.navigate(['/groups/expense/create-expense',this.gid]);
  }

  redirectToUpdateExpense = () => {
    this._router.navigate(['/groups/expense/update-expense',this.gid]);
  }


  public getUpdatesFromUser = () => {

    this.socket.getUpdatesFromUser(this.userId).subscribe((data) => {
      //getting message from user.
      this.toastr.info(data.message);
      //console.log(data)

      if(!data.gid)
        this.getExpenseDetails()

    });
  }//end getUpdatesFromUser


    //listened
    public verifyUserConfirmation: any = () => {
      this.socket.verifyUser()
        .subscribe(() => {
          this.socket.setUser(this.authToken);//in reply to verify user emitting set-user event with authToken as parameter.
        },
        (err) => {
          this.toastr.error(err,"Some error occured");
        });//end subscribe
    }//end verifyUserConfirmation
  
  //emitted 

  public notifyUpdatesToUser: any = (data) => {
    //data will be object with message and userId(recieverId)
    this.socket.notifyUpdates(data);
    //console.log(data)

    if(!data.gid)
      this.getExpenseDetails(this.userId)

  }//end notifyUpdatesToUser



}