import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { CreateGroupComponent } from "./groups/create-group/create-group.component";
import { GroupDetailsComponent } from "./groups/group-details/group-details.component";
import { GroupsComponent } from "./groups/groups/groups.component";
import { TopNavigationComponent } from "./shared/top-navigation/top-navigation/top-navigation.component";
import { NotificationsComponent } from "./notifications/notifications/notifications/notifications.component";
import { AddExpenseComponent } from "./expenses/add-expense/add-expense.component";
import { UpdateExpenseComponent } from "./expenses/update-expense/update-expense.component";

@NgModule({
  declarations: [
    GroupsComponent,
    CreateGroupComponent,
    GroupDetailsComponent,
    TopNavigationComponent,
    NotificationsComponent,
    AddExpenseComponent,
    UpdateExpenseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
})
export class GroupsModule {}
