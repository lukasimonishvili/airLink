import { Component, OnInit } from "@angular/core";
import { OrdersService } from "../../services/orders/orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  private orders: Array<any> = [];
  private activeIndex: number = -1;

  constructor(private ordersService: OrdersService ) {}

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
    this.activeIndex = -1;
  }

  public openDialog(i: number) {
    let currentIndex = i + 1;
    let elements = document.getElementsByClassName("admin__orders__tr");
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
    let element = document.getElementsByClassName("admin__orders__tr")[this.activeIndex].lastChild.lastChild as HTMLElement;
    element.style.width = "0";
    this.activeIndex = -1;
  }


  ngOnInit() {
    this.getAllOrder();
  }
}
