import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { OrdersComponent } from "./orders/orders.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthGuardService as authGuard } from "../services/authGuard/auth-guard.service";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "orders", component: OrdersComponent, canActivate: [authGuard] },
  { path: "messages", component: ContactComponent, canActivate: [authGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
