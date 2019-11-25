import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { AcdcNotificationsService } from "acdc-notifications";

@Injectable({
  providedIn: "root"
})
export class OrdersService {
  url = environment.API_URL;
  admin = window.localStorage.getItem("user");

  constructor(
    private http: HttpClient,
    private notifier: AcdcNotificationsService
  ) {}

  public notifySuccess(message) {
    alert("in success notif");
    this.notifier.toast({
      title: message,
      timeout: 3000,
      notificationLevel: "Success"
    });
  }

  public notifError(message) {
    alert("in  error notif");
    this.notifier.toast({
      title: message,
      timeout: 3000,
      notificationLevel: "Error"
    });
  }

  public newOrder(payLoad) {
    alert("in order service");
    return this.http
      .post(this.url + "/order/new", payLoad)
      .pipe(map(response => response));
  }

  public getAllOrder() {
    return this.http
      .get(this.url + "/order/all/" + this.admin)
      .pipe(map(response => response));
  }

  public deleteOrder(id) {
    return this.http
      .delete(`${this.url}/order/remove/${this.admin}/${id}`)
  }
}
