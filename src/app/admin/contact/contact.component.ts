import { Component, OnInit } from '@angular/core';

import { MessagesService } from "../../services/messages/messages.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private messages: Array<any> = [];
  private activeIndex: number = -1;
  constructor(private messagesService: MessagesService) { }

  private getAllMessages() {
    this.messagesService.getAllMessages().subscribe(response => {
      if (response["status"] == 200) {
        this.messages = response["data"];
      } else if (response["status"] == 401) {
        window.location.replace("/admin");
      }
    })
  }

  ngOnInit() {
    this.getAllMessages()
  }

  public deleteMessage(id) {
    this.messagesService.deleteMessage(id).subscribe(response => {
      if (response["status"] == 200) {
        this.messagesService.notifySuccess(response["message"]);
        this.getAllMessages();
      } else if (response["status"] == 401) {
        window.location.replace("/admin");
      } else {
        this.messagesService.notifError(response["message"]);
      }
    })
    this.activeIndex = -1;
  }

  public openDialog(i: number) {
    let currentIndex = i + 1;
    let elements = document.getElementsByClassName("admin__messages__tr");
    let element = elements[currentIndex].lastChild.lastChild as HTMLElement;
    if (this.activeIndex < 0) {
      element.style.width = "100px";
    } else if (this.activeIndex == currentIndex) {
      return;
    } else {
      this.closeConfirmation();
      element.style.width = "100px";
    }
    this.activeIndex = currentIndex;
  }

  public closeConfirmation() {
    let element = document.getElementsByClassName("admin__messages__tr")[this.activeIndex].lastChild.lastChild as HTMLElement;
    element.style.width = "0";
    this.activeIndex = -1;
  }

}
