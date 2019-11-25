import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { AcdcNotificationsService } from "acdc-notifications";

@Injectable({
  providedIn: "root"
})
export class MessagesService {
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

  public sendMessage(payLoad) {
    return this.http
      .post(this.url + "/message/send", payLoad)
      .pipe(map(response => response));
  }

  public getAllMessages() {
    return this.http
      .get(this.url + "/message/all/" + this.admin)
      .pipe(map(response => response))
  }

  public deleteMessage(id) {
    return this.http
      .delete(`${this.url}/message/delete/${this.admin}/${id}`)
      .pipe(map(response => response));
  }

}
