import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthsServiceService {

  constructor(private route: Router) { }
  canActivate() {
    if (localStorage.getItem("username")) {
      if (localStorage.getItem("username") == "user" && localStorage.getItem("password") == "password"){
       this.route.navigate['/user'];
        return true;
      }
      else if(localStorage.getItem("username")=="admin" && localStorage.getItem("password")=="admin"){
         this.route.navigate['/admin'];
        return true;
      }
      else
      {
        this.route.navigate['/notAuthorized'];
        return false;
      }
    }
      else{
        return false;
      }
    }
  }

