import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthsServiceService {

  constructor(private route: Router) { }
  canActivate() {
    if (localStorage.getItem("userName")) {

      if (localStorage.getItem("userName") === "user" && localStorage.getItem("password") === "user")
       {
        console.log("yes");
      //  this.route.navigate['/user'];
        return true;
        
      }
      else if (localStorage.getItem("userName") === "admin" && localStorage.getItem("password") === "admin")
       {
        //    this.route.navigate['/admin'];
        return true;
      }
      
      else {
        this.route.navigate(['/notAuthorized']);
        return false;
      }
    }
    else {
      this.route.navigate(['/notAuthorized']);
      return false;
    }
  }
}

