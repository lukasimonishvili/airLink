import { Component, OnInit } from "@angular/core";

import { OrdersService } from "../../services/orders/orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  private orders: Array<any> = [];

  constructor(private ordersService: OrdersService) {}

  private getAllOrder() {
    this.ordersService.getAllOrder().subscribe(response => {
      if (response["status"] == 401) {
        window.location.replace("/admin");
      } else {
        this.orders = response["data"];
      }
    });
  }

  public removeOrder(id) {
    this.ordersService.deleteOrder(id).subscribe(response => {
      if (response["status"] == 200) {
        this.ordersService.notifySuccess(response["message"]);
        this.getAllOrder();
      } else if (response["status"] == 401) {
        window.location.replace("/admin");
      } else {
        this.ordersService.notifError(response["message"]);
      }
    })
  }

  test() {
    console.log("confirmed")
  }

  ngOnInit() {
    this.getAllOrder();
  }
}
