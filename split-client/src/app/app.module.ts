import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';

import { AuthenticationModule } from './authentication/authentication.module';
import { AuthenticateService } from './helpers/services/authentication/authenticate.service';
import { TopNavigationComponent } from './modules/shared/top-navigation/top-navigation/top-navigation.component';

import { CommunicationService } from 'src/app/helpers/services/core/communication.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { GroupsService } from './helpers/services/groups/groups.service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GroupsModule } from "./modules/groups.module";
import { HttpClient } from '@angular/common/http';
import { SocketService } from './helpers/services/socket/socket.service';
import { NotificationsService } from './helpers/services/notifications/notifications.service';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    SharedModule,
    RouterModule,
    NgMultiSelectDropDownModule.forRoot(),
    GroupsModule,
    
  ],
  providers: [AppRoutingModule,AuthenticateService,NotificationsService,CommunicationService,GroupsService,SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
