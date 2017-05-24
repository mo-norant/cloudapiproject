import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material'
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs'
import { FacebookoauthService} from './facebookoauth.service';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { JasperoAlertsModule } from '@jaspero/ng2-alerts';
import { JasperoConfirmationsModule } from '@jaspero/ng2-confirmations'
import { routes } from './router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CarditemComponent } from './carditem/carditem.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { OpendataAntwerpenService } from './opendata-antwerpen.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ToolbarComponent,
    CarditemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JasperoAlertsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    JasperoConfirmationsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmUFnUtYX13RdtjhdB4OE4hgch5pWK2UA'
    })


  ],
  providers: [FacebookoauthService, OpendataAntwerpenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
