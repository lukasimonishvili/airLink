import { Injectable } from "@angular/core";
import { Router, CanActivate, NavigationCancel } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | boolean {
    this.router.events
      .pipe(filter(event => event instanceof NavigationCancel))
      .subscribe((e: NavigationCancel) => {
        let url = e.url;
        localStorage.setItem("loginRedirect", url);
      });

    if (window.localStorage.getItem("user") == "5dda62a8384465372435e9eb") {
      return true;
    } else {
      this.router.navigate(["admin"]);
      return false;
    }
  }
}
