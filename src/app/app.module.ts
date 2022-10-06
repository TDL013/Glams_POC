import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideMenuOneComponent } from './side-menu-one/side-menu-one.component';
import { SideMenuTwoComponent } from './side-menu-two/side-menu-two.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { TheSideMenuOneComponent } from './side-menu-one-details/the-side-menu-one/the-side-menu-one.component';
import { TheDetailsOneComponent } from './side-menu-one-details/the-details-one/the-details-one.component';
import { TheSideMenuTwoComponent } from './side-menu-two-details/the-side-menu-two/the-side-menu-two.component';
import { TheDetailsTwoComponent } from './side-menu-two-details/the-details-two/the-details-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuOneComponent,
    SideMenuTwoComponent,
    NavbarComponent,
    FooterComponent,
    TheSideMenuOneComponent,
    TheDetailsOneComponent,
    TheSideMenuTwoComponent,
    TheDetailsTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
