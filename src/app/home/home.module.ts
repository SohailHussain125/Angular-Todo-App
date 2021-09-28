import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeRoutingModule } from './home-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModuleModule } from '../shared-module/shared-module.module';




@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    CarouselModule,
    HomeRoutingModule,
    SlickCarouselModule,
    SharedModuleModule
  ]
})
export class HomeModule { }
