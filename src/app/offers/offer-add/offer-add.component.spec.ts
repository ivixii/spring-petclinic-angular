import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {OfferAddComponent} from './offer-add.component';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {OfferService} from '../offer.service';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterStub} from '../../testing/router-stubs';
import {Offer} from '../offer';
import {Observable, of} from 'rxjs';

class OwnserServiceStub {

  addOffer(offer: Offer): Observable<Offer> {
    return of(offer);
  }
}

describe('OfferAddComponent', () => {
  let component: OfferAddComponent;
  let fixture: ComponentFixture<OfferAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OfferAddComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, RouterTestingModule],
      providers: [
        {provide: OfferService, useClass: OwnserServiceStub},
        {provide: Router, useClass: RouterStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create OfferAddComponent', () => {
    expect(component).toBeTruthy();
  });
});