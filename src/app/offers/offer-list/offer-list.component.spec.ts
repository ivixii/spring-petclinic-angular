import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';

import {OfferListComponent} from './offer-list.component';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {OfferService} from '../offer.service';
import {Offer} from '../offer';
import {Observable, of} from 'rxjs';
import {RouterTestingModule} from '@angular/router/testing';
import {CommonModule} from '@angular/common';
import {PartsModule} from '../../parts/parts.module';
import {ActivatedRouteStub} from '../../testing/router-stubs';
import {OfferDetailComponent} from '../offer-detail/offer-detail.component';
import {OffersModule} from '../offers.module';
import {DummyComponent} from '../../testing/dummy.component';
import {OfferAddComponent} from '../offer-add/offer-add.component';
import {OfferEditComponent} from '../offer-edit/offer-edit.component';
import Spy = jasmine.Spy;


class OfferServiceStub {
  getOffers(): Observable<Offer[]> {
    return of();
  }
}

describe('OfferListComponent', () => {

  let component: OfferListComponent;
  let fixture: ComponentFixture<OfferListComponent>;
  let offerService = new OfferServiceStub();
  let spy: Spy;
  let de: DebugElement;
  let el: HTMLElement;


  const testOffer: Offer = {
    id: 1,
    title: 'Harry Potter',
    description: 'La Piedra Filosofal',
    discount: '10',
    expiredate: '12/12/2019'
  };
  let testOffers: Offer[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DummyComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [CommonModule, FormsModule, PartsModule, OffersModule,
        RouterTestingModule.withRoutes(
          [{path: 'offers', component: OfferListComponent},
            {path: 'offers/add', component: OfferAddComponent},
            {path: 'offers/:id', component: OfferDetailComponent},
            {path: 'offers/:id/edit', component: OfferEditComponent}
          ])],
      providers: [
        {provide: OfferService, useValue: offerService},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    testOffers = [{
      id: 1,
      title: 'Harry Potter',
      description: 'La Piedra Filosofal',
      discount: '10',
      expiredate: '12/12/2019'
      }]
    });

    fixture = TestBed.createComponent(OfferListComponent);
    component = fixture.componentInstance;
    offerService = fixture.debugElement.injector.get(OfferService);
    spy = spyOn(offerService, 'getOffers')
      .and.returnValue(of(testOffers));

  });
/*
  it('should create OfferListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit() method', () => {
    fixture.detectChanges();
    expect(spy.calls.any()).toBe(true, 'getOffers called');
  });


  it(' should show full name after getOffers observable (async) ', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => { // wait for async getOffers
      fixture.detectChanges();        // update view with name
      de = fixture.debugElement.query(By.css('.offerFullName'));
      el = de.nativeElement;
      expect(el.innerText).toBe((testOffer.title.toString()));
    });
  }));

});
*/