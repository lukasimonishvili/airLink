import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminRoutingModule } from "./admin-routing.module";
import { LoginComponent } from "./login/login.component";
import { PanelComponent } from "./panel/panel.component";
import { HeaderComponent } from "./header/header.component";
import { OrdersComponent } from "./orders/orders.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthGuardService } from "../services/authGuard/auth-guard.service";
import { EmptyComponent } from './empty/empty.component';
import 'bootstrap/dist/css/bootstrap.css';
import { ConfirmationPopoverModule } from "angular-confirmation-popover";


@NgModule({
  declarations: [
    LoginComponent,
    PanelComponent,
    HeaderComponent,
    OrdersComponent,
    ContactComponent,
    EmptyComponent
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, ReactiveFormsModule,ConfirmationPopoverModule.forRoot({
    confirmButtonType: 'danger'
  })],
  providers: [AuthGuardService]
})
export class AdminModule {}
