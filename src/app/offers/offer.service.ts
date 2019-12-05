
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

    this.handlerError = httpErrorHandler.createHandleError('OwnerService');
  }

  getOwners(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.entityUrl)
      .pipe(
        catchError(this.handlerError('getOwners', []))
      );
  }

  getOwnerById(ownerId: string): Observable<Offer> {
    return this.http.get<Offer>(this.entityUrl + '/' + ownerId)
      .pipe(
          catchError(this.handlerError('getOwnerById', {} as Offer))
      );
  }

  addOwner(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(this.entityUrl, offer)
      .pipe(
        catchError(this.handlerError('addOwner', offer))
      );
  }

  updateOwner(ownerId: string, offer: Offer): Observable<{}> {
    return this.http.put<Offer>(this.entityUrl + '/' + ownerId, offer)
      .pipe(
        catchError(this.handlerError('updateOwner', offer))
      );
  }

  deleteOwner(ownerId: string): Observable<{}> {
    return this.http.delete<Offer>(this.entityUrl + '/' + ownerId)
      .pipe(
         catchError(this.handlerError('deleteOwner', [ownerId]))
      )
  }
}
