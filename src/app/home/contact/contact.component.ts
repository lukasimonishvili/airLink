import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessagesService } from "../../services/messages/messages.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  private messageForm: FormGroup;

  constructor(
    private messagesService: MessagesService,
    private fb: FormBuilder
  ) {}

  private createMessageForm() {
    this.messageForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      number: ["", Validators.required],
      subject: ["", Validators.required],
      message: ["", Validators.required]
    });
  }

  public onMessageSubmit() {
    if (this.messageForm.invalid) {
      return;
    }
    if (this.messageForm.valid) {
      let payLoad = this.messageForm.value;
      this.messagesService.sendMessage(payLoad).subscribe(response => {
        if (response["status"] == 200) {
          this.messagesService.notifySuccess("Message sent");
        } else {
          this.messagesService.notifError("Try again later");
        }
        this.messageForm.reset();
      });
    }
  }

  ngOnInit() {
    this.createMessageForm();
  }
}
