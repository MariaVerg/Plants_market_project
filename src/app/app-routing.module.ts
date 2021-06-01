import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContentComponent } from './content/content.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { PlantPageComponent } from './plant-page/plant-page.component';
import { PlantsComponent } from './plants/plants.component';


const routes: Routes = [
  {path: '', component: ContentComponent},
  {path: 'about', component: AboutComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'discount/:discount', component: PlantsComponent},
  {path: 'bulbs/:section', component: PlantsComponent},
  {path: 'perrenial/:section', component: PlantsComponent},
  {path: 'rose/:section', component: PlantsComponent},
  {path: 'shrub/:section', component: PlantsComponent},
  {path: 'plant/:plantName', component: PlantPageComponent},
  {path: 'search/:itemSearch', component: PlantsComponent},
  {path: 'sale/:species', component: PlantsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
