import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeMainComponent } from "./home-main/home-main.component";
import { HeaderComponent } from "./header/header.component";
import { SliderComponent } from "./slider/slider.component";
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { OrderComponent } from "./order/order.component";
import { SpeedTestComponent } from "./speed-test/speed-test.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    HomeMainComponent,
    HeaderComponent,
    SliderComponent,
    AboutComponent,
    ServicesComponent,
    OrderComponent,
    SpeedTestComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: []
})
export class HomeModule {}
