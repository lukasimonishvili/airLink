import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMainComponent } from './home-main/home-main.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { OrderComponent } from './order/order.component';
import { SpeedTestComponent } from './speed-test/speed-test.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HomeMainComponent, HeaderComponent, SliderComponent, AboutComponent, ServicesComponent, OrderComponent, SpeedTestComponent, ContactComponent, FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
