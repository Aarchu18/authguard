import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthsServiceService } from './auths-service.service';
import{NotAuthorizedComponent} from './not-authorized/not-authorized.component';

const route: Routes = [{
  path: "",
  component: LoginComponent
},
{
  path:"user",
  component:UserComponent,
  canActivate:[AuthsServiceService]
},
{
  path:"notAuthorized",
component:NotAuthorizedComponent
},
{
  path:"admin",
  component:AdminComponent,
  canActivate:[AuthsServiceService]

},

]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot(route)
  ],
  providers: [
    AuthsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
