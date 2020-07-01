import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';

import { CustomMaterialModule } from './custom-material/custom-material.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AddElementComponent } from './Components/add-element/add-element.component';
import { EditElementComponent } from './Components/edit-element/edit-element.component';
import { ComputerDetailsComponent } from './Components/computer-details/computer-details.component';
import { CompanyDetailsComponent } from './Components/company-details/company-details.component';
import { ListElementsComponent } from './Components/list-elements/list-elements.component';
import { ConnectionComponent } from './Components/Login-SignIn/connection/connection.component';
import { RegistrationComponent } from './Components/Login-SignIn/registration/registration.component';
import { AuthenticationPageComponent } from './Components/Login-SignIn/authentication-page/authentication-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

export function HttpLoaderFactory(httpClient: HttpClient){


  return new TranslateHttpLoader(httpClient);
}

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
    AuthenticationPageComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
