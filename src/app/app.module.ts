import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PlantsComponent } from './plants/plants.component';
import { FilterComponent } from './filter/filter.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantPageComponent } from './plant-page/plant-page.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    DeliveryComponent,
    ContactsComponent,
    PlantsComponent,
    FilterComponent,
    PlantCardComponent,
    PlantPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
