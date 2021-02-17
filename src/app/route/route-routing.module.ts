import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from '../product/product.component'; //ajouté automatiquement
import { WelcomeComponent } from '../welcome/welcome.component'; //ajouté automatiquement

const routes: Routes = [
  {
  path: '', // on ajoute le path
  component: WelcomeComponent //on ajoute le welcome component
  },
  {
    path: 'product/:id', // on ajoute le path : lorsqu'on veut ouvrir la page product on tappe : http://localhost:4200/product:1 par exemple id=1
    component: ProductComponent //on ajoute le welcome component
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // on modifie forChild par forRoot
  exports: [RouterModule]
})
export class RouteRoutingModule { }
