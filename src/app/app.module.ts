import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import {
  AcdcNotificationsModule,
  AcdcHorizontalAlignment,
  AcdcVerticalAlignment,
  AcdcNotifcationsDefaultConfig
} from "acdc-notifications";

const notificationsConfig: AcdcNotifcationsDefaultConfig = {
  toast: {
    addToTop: true,
    horizontalAlignment: AcdcHorizontalAlignment.Right,
    verticalAlignment: AcdcVerticalAlignment.Top,
    createAnimations: "acdcFadeInAnimation, acdcSlideInTopAnimation",
    dismissAnimations: "acdcFadeOutAnimation, acdcSlideOutRightAnimation",
    minCntToShowDeleteAllBtn: 2,
    zIndex: "1000000001",
    error: {
      titleColor: "white",
      messageColor: "white",
      backgroundColor: "#ff3d00",
      iconsColor: "white"
    },
    success: {
      titleColor: "white",
      messageColor: "white",
      backgroundColor: "#4caf50",
      iconsColor: "white"
    }
  }
};

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ErrorComponent } from "./error/error.component";

@NgModule({
  declarations: [AppComponent, ErrorComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AcdcNotificationsModule.forRoot(notificationsConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
