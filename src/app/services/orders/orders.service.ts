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
      .post(this.url + "/order/new", payLoad)
      .pipe(map(response => response));
  }
}
