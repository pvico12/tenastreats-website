import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricingComponent } from './pricing/pricing.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "menu",
    component: PricingComponent
  },
  {
    path: "order",
    component: OrderComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
