import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrscannerPage } from './qrscanner/qrscanner.page';
import { QrscannerPageModule } from './qrscanner/qrscanner.module';

import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { ProductService } from './services/product.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

export const firebaseConfig = {
  apiKey: "AIzaSyB0TZLmPVpr8e6HC-hMY1cEf-VLWmygJlM",
  authDomain: "despensero-63378.firebaseapp.com",
  databaseURL: "https://despensero-63378.firebaseio.com",
  projectId: "despensero-63378",
  storageBucket: "",
  messagingSenderId: "201108436933"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    QrscannerPageModule,
    IonicModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
