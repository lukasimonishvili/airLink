import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map , catchError } from "rxjs/operators";
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
    this.notifier.toast({
      title: message,
      timeout: 3000,
      notificationLevel: "Success"
    });
  }

  public notifError(message) {
    this.notifier.toast({
      title: message,
      timeout: 3000,
      notificationLevel: "Error"
    });
  }

  public newOrder(payLoad) {
    return this.http
      .post("/api/order/new", payLoad)
      .pipe(map(response => response));
  }

  public getAllOrder() {
    return this.http
      .get("/api/order/all/" + this.admin)
      .pipe(map(response => response));
  }

  public deleteOrder(id) {
    return this.http
      .delete(`/api/order/remove/${this.admin}/${id}`)
  }
}
