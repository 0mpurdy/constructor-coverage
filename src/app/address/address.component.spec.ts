import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import { MapService } from '../services/map/map.service';
import { AddressService } from '../services/address/address.service';

describe('AddressComponent', () => {
    let component: AddressComponent;
    let fixture: ComponentFixture<AddressComponent>;

    let mockMapService, mockAddressService;

    beforeEach(async(() => {

        mockMapService = jasmine.createSpyObj('MapService', ['getCoords']);
        mockAddressService = jasmine.createSpyObj('AddressService', ['getNumber']);

        TestBed.configureTestingModule({
            declarations: [AddressComponent],
            providers: [
                { provide: MapService, useValue: mockMapService },
                { provide: AddressService, useValue: mockAddressService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call service methods', () => {
        // arrange
        mockAddressService.getNumber.and.returnValue(3);
        mockMapService.getCoords.and.returnValue('2,4');
        // act
        component.callServiceMethods();
        // assert
        expect(component.buildingNumberCache).toBe(3);
        expect(component.coordsCache).toBe('2,4');
        expect(mockAddressService.getNumber).toHaveBeenCalled();
        expect(mockMapService.getCoords).toHaveBeenCalled();
    });
});
