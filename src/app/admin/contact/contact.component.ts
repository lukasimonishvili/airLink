import { Component, OnInit } from '@angular/core';

import { MessagesService } from "../../services/messages/messages.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private messages: Array<any> = [];

  constructor(private messagesService: MessagesService) { }

  private getAllMessages() {
    this.messagesService.getAllMessages().subscribe(response => {
      if (response["status"] == 200) {
        this.messages = response["data"];
      }
    })
  }

  ngOnInit() {
    this.getAllMessages()
  }

  public deleteMessage(id) {
    let confirmed = confirm("Are you sure remove this message?");
    if (confirmed) {
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
      
    }
  }

}
