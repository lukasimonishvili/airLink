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
    if (this.orderForm.invalid) {
      return;
    }
    if (this.orderForm.valid) {
      let payLoad = this.orderForm.value;
      this.OrdersService.newOrder(payLoad).subscribe(response => {
        console.log(response);
        if (response["status"] == 200) {
          this.OrdersService.notifySuccess("Your order sent");
        } else {
          this.OrdersService.notifError("Please try again");
        }
        this.orderForm.reset();
      });
    }
  }

  ngOnInit() {
    this.createOrderForm();
  }
}
