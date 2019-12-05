import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { OfferDetailComponent } from './offer-detail/offer-detail.component';
import { OfferEditComponent } from './offer-edit/offer-edit.component';
import { OfferListComponent } from './offer-list/offer-list.component';

@NgModule({
  declarations: [OfferAddComponent, OfferDetailComponent, OfferEditComponent, OfferListComponent],
  imports: [
    CommonModule
  ]
})
export class OffersModule { }
