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

/**
 * @author Vitaliy Fedoriv
 */

import {Injectable} from '@angular/core';
import {Offer} from './offer';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandler} from '../error.service';


@Injectable()
export class OfferService {

  entityUrl = environment.REST_API_URL + 'offers';

  private readonly handlerError: HandleError;

  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {
    this.handlerError = httpErrorHandler.createHandleError('OfferService');
  }

  getOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getOffers', []))
      );
  }

  getOfferById(offerId: string): Observable<Offer> {
    return this.http.get<Offer>(this.entityUrl + '/' + offerId)
      .pipe(
          catchError(this.handlerError('getOfferById', {} as Offer))
      );
  }

  addOffer(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(this.entityUrl, offer)
      .pipe(
        catchError(this.handlerError('addOffer', offer))
      );
  }

  updateOffer(offerId: string, offer: Offer): Observable<{}> {
    return this.http.put<Offer>(this.entityUrl + '/' + offerId, offer)
      .pipe(
        catchError(this.handlerError('updateOffer', offer))
      );
  }

  deleteOffer(offerId: string): Observable<{}> {
    return this.http.delete<Offer>(this.entityUrl + '/' + offerId)
      .pipe(
         catchError(this.handlerError('deleteOffer', [offerId]))
      );
  }


}
