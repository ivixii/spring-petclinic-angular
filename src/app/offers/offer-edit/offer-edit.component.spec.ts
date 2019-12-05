import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { OfferEditComponent } from './offer-edit.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {OfferService} from '../offer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedRouteStub, RouterStub} from '../../testing/router-stubs';
import {Offer} from '../offer';
import {Observable, of} from 'rxjs';

class OfferServiceStub {
  getOfferById(): Observable<Offer> {
    return of( { id: 1, title: 'James' } as Offer );
  }
}

describe('OfferEditComponent', () => {
  let component: OfferEditComponent;
  let fixture: ComponentFixture<OfferEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfferEditComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      // schemas: [ NO_ERRORS_SCHEMA ],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        {provide: OfferService, useClass: OfferServiceStub},
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
      .compileComponents();
  }));

 /* beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferEditComponent ]
    })
    .compileComponents();
  }));*/

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create OwnerEditComponent', () => {
    expect(component).toBeTruthy();
  });
});
