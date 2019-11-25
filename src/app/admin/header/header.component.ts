import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  private activeRoute: string = "";

  constructor() {}

  private detectActiveRoute() {
    let url = window.location.pathname.split("/");
    let route = url[url.length - 1];
    return route;
  }

  public logOut() {
    window.localStorage.removeItem("user");
    window.location.replace("/admin");
  }

  ngOnInit() {
    this.activeRoute = this.detectActiveRoute();
  }
}
