/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/* tslint:disable:no-unused-variable */


/**
 * @author Vitaliy Fedoriv
 */


/*
 *
 *  * Copyright 2016-2017 the original author or authors.
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *      http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

/* tslint:disable:no-unused-variable */

/**
 * @author Vitaliy Fedoriv
 */

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// Other imports
import {TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';

import {HttpErrorHandler} from '../error.service';

import {OfferService} from './offer.service';
import {Offer} from './offer';
import {Type} from '@angular/core';

describe('OnwerService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let offerService: OfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Import the HttpClient mocking services
      imports: [ HttpClientTestingModule ],
      // Provide the service-under-test and its dependencies
      providers: [
        OfferService,
        HttpErrorHandler
      ]
    });

    // Inject the http, test controller, and service-under-test
    // as they will be referenced by each test.
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    offerService = TestBed.get(OfferService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  /// OfferService method tests begin ///

  // describe('#getOffers', () => {
  //   let expectedOffers: Offer[];

  //   beforeEach(() => {
  //     offerService = TestBed.get(OfferService);
  //     expectedOffers = [
  //       { id: 1, firstName: 'A' },
  //       { id: 2, firstName: 'B' },
  //     ] as Offer[];
  //   });

  //   it('should return expected offers (called once)', () => {

  //     offerService.getOffers().subscribe(
  //       offers => expect(offers).toEqual(expectedOffers, 'should return expected offers'),
  //       fail
  //     );

  //     // OfferService should have made one request to GET offers from expected URL
  //     const req = httpTestingController.expectOne(offerService.entityUrl);
  //     expect(req.request.method).toEqual('GET');

  //     // Respond with the mock offers
  //     req.flush(expectedOffers);
  //   });
  // });

});
