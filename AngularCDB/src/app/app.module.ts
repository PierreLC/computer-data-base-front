import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { AddElementComponent } from './Components/add-element/add-element.component';
import { EditElementComponent } from './Components/edit-element/edit-element.component';
import { ComputerDetailsComponent } from './Components/computer-details/computer-details.component';
import { CompanyDetailsComponent } from './Components/company-details/company-details.component';
import { ListElementsComponent } from './Components/list-elements/list-elements.component';
import { ConnectionComponent } from './Components/Login-SignIn/connection/connection.component';
import { RegistrationComponent } from './Components/Login-SignIn/registration/registration.component';
import { AuthenticationPageComponent } from './Components/Login-SignIn/authentication-page/authentication-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddElementComponent,
    EditElementComponent,
    ComputerDetailsComponent,
    CompanyDetailsComponent,
    ListElementsComponent,
    ConnectionComponent,
    RegistrationComponent,
    AuthenticationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
