import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuPateComponent } from './components/menu/menu-pate/menu-pate.component';
import { MenuPizzaComponent } from './components/menu/menu-pizza/menu-pizza.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'accueil'},
  { path: 'accueil', component: AccueilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'menu', component: MenuComponent, children: [
    { path: 'pate', component: MenuPateComponent },
    { path: 'pizza', component: MenuPizzaComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
