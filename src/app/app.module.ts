import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationService } from './registration.service';
import { StartPageComponent } from './start-page/start-page.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    SingUpComponent,
    LogInComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
