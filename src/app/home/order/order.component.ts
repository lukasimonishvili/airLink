import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, Form } from "@angular/forms";
import { OrdersService } from "../../services/orders/orders.service";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  private orderForm: FormGroup;

  constructor(private OrdersService: OrdersService, private fb: FormBuilder) {}

  private createOrderForm() {
    this.orderForm = this.fb.group({
      name: ["", Validators.required],
      lastName: ["", Validators.required],
      number: ["", Validators.required],
      address: ["", Validators.required],
      idNumber: ["", Validators.required],
      message: ["", Validators.required]
    });
  }

  public onOrderSubmit() {
    alert("first step");
    if (this.orderForm.invalid) {
      alert("invalid");
      return;
    }
    if (this.orderForm.valid) {
      alert("valid");
      let payLoad = this.orderForm.value;
      this.OrdersService.newOrder(payLoad).subscribe(response => {
        if (response["status"] == 200) {
          alert("success");
          this.OrdersService.notifySuccess("Your order sent");
        } else {
          alert("error");
          this.OrdersService.notifError("Please try again");
        }
        alert("try to reset");
        this.orderForm.reset();
      });
    }
  }

  ngOnInit() {
    this.createOrderForm();
  }
}
