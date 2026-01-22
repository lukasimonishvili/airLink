import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../services/login/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loginStatus: boolean = false;

  constructor(private LoginService: LoginService, private fb: FormBuilder) {}

  private craeteLoginForm() {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  public onLoginSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    if (this.loginForm.valid) {
      this.LoginService.login(this.loginForm.value).subscribe(response => {
        if (response["status"] == 200) {
          let storage = response["data"]._id;
          window.localStorage.setItem("user", storage);
          window.location.replace("/admin/orders");
        } else {
          this.LoginService.notifError(response["message"]);
        }
      });
    }
  }

  ngOnInit() {
    if (window.localStorage.getItem("user") == "5dda62a8384465372435e9eb") {
      window.location.replace("/admin/orders");
    }
    this.craeteLoginForm();
  }
}
