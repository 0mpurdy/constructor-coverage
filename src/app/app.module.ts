import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddressComponent } from './address/address.component';
import { AddressService } from './services/address/address.service';
import { MapService } from './services/map/map.service';

@NgModule({
    declarations: [
        AppComponent,
        AddressComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        AddressService,
        MapService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
