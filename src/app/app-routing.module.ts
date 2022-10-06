import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideMenuOneComponent } from './side-menu-one/side-menu-one.component';
import { SideMenuTwoComponent } from './side-menu-two/side-menu-two.component';

const routes: Routes = [
  {
    path: 'side-menu-one',
    component: SideMenuOneComponent,
  },
  {
    path: 'side-menu-two',
    component: SideMenuTwoComponent,
  },
  {
    path: '',
    redirectTo: '/side-menu-one',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/side-menu-one',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
