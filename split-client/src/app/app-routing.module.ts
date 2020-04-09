import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password/reset-password.component';
import { GroupsComponent } from './modules/groups/groups/groups.component';
import { MyProfileComponent } from './modules/my profile/my-profile/my-profile.component';
import { NotificationsComponent } from './modules/notifications/notifications/notifications/notifications.component';
import { AuthGuard } from './helpers/guards/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { CreateGroupComponent } from './modules/groups/create-group/create-group.component'
import { UpdateGroupComponent } from './modules/groups/update-group/update-group.component';
import { GroupDetailsComponent } from './modules/groups/group-details/group-details.component'
import { AddExpenseComponent } from './modules/expenses/add-expense/add-expense.component';
import { UpdateExpenseComponent } from './modules/expenses/update-expense/update-expense.component';



const routes: Routes = [
  { 
    path: '',
    redirectTo: 'authenticate', 
    pathMatch: 'full'
  },
  {
    path: 'authenticate',
    component: LoginComponent
  },

  { 
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
{
  path:'resetpassword/:validationToken',
  component:ResetPasswordComponent
},
{
  path:'groups',
  component:GroupsComponent,
  canActivate:[AuthGuard]
},
{
  path:'groups/create-group',
  component:CreateGroupComponent,
  canActivate:[AuthGuard]
},
{
  path:'groups/:id',
  component:GroupDetailsComponent,
  canActivate:[AuthGuard]
},
{
  path:'groups/updateGroup',
  component:UpdateGroupComponent,
  canActivate:[AuthGuard]
},
{
  path:'groups/expense/create-expense/:groupId',
  component:AddExpenseComponent,
  canActivate:[AuthGuard]
},
{
  path:'groups/expense/update-expense/:expenseId',
  component:UpdateExpenseComponent,
  canActivate:[AuthGuard]
},
{
  path:'my-profile',
  component:MyProfileComponent,
  canActivate:[AuthGuard]
},
{
  path:'notifications',
  component:NotificationsComponent,
  canActivate:[AuthGuard]
},
{
  path :'*',
  component:PageNotFoundComponent
},
{
  path :'**',
  component:PageNotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
