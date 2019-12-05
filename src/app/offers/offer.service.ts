
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

  getOfferById(offernerId: string): Observable<Offer> {
    return this.http.get<Offer>(this.entityUrl + '/' + offernerId)
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

  updateOffer(offernerId: string, offer: Offer): Observable<{}> {
    return this.http.put<Offer>(this.entityUrl + '/' + offernerId, offer)
      .pipe(
        catchError(this.handlerError('updateOffer', offer))
      );
  }

  deleteOffer(offernerId: string): Observable<{}> {
    return this.http.delete<Offer>(this.entityUrl + '/' + offernerId)
      .pipe(
         catchError(this.handlerError('deleteOffer', [offernerId]))
      )
  }
}
