import { Injectable } from '@angular/core';

@Injectable()
export class MapService {

    constructor() { }

    getCoords(): string {
        return '1,1';
    }

}
