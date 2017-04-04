import { Component, OnInit } from '@angular/core';

import { MapService } from '../services/map/map.service';
import { AddressService } from '../services/address/address.service';

@Component({
    selector: 'app-address',
    templateUrl: './address.component.html',
    styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

    coordsCache: string;
    buildingNumberCache: number;

    constructor(
        private mapService: MapService,
        private addressService: AddressService
    ) {
        this.callServiceMethods();
    }

    ngOnInit() {
        this.callServiceMethods();
    }

    callServiceMethods() {
        this.coordsCache = this.mapService.getCoords();
        this.buildingNumberCache = this.addressService.getNumber();
    }

}
