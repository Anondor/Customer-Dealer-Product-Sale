import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DealerComponent } from './dealer/dealer.component';

const routes: Routes = [
  {path:'',component:CustomerComponent},
  {path:'customer',component:CustomerComponent},
  {path:'dealer', component:DealerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
