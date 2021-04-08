import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ConnectwithusComponent } from './connectwithus/connectwithus.component';
import { FooterComponent } from './footer/footer.component';
import { HolidayComponent } from './holiday/holiday.component';
import { SpicesComponent } from './spices/spices.component';
import { SpiceworldComponent } from './spiceworld/spiceworld.component';
import { SweetComponent } from './sweet/sweet.component';
import { TeasComponent } from './teas/teas.component';

const routes: Routes = [
  {path:"spiceworld",component:SpiceworldComponent},
  {path:"spices",component:SpicesComponent},
  {path:"connectwithus",component:ConnectwithusComponent},
  {path:"cards",component:CardsComponent},
  {path:"footer",component:FooterComponent},
  {path:"carousel",component:CarouselComponent},
  {path:"holiday",component:HolidayComponent},
  {path:"sweet",component:SweetComponent},
  {path:"teas",component:TeasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
