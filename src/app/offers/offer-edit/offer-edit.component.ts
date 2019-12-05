import { Component, OnInit } from '@angular/core';
import {OfferService} from '../offer.service';
import {Offer} from '../offer';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.css']
})
export class OfferEditComponent implements OnInit {

  offer: Offer;
  errorMessage: string; // server error message
  constructor(private offerService: OfferService, private route: ActivatedRoute, private router: Router) { 
    this.offer = {} as Offer;
  }

  ngOnInit() {

    const ownerId = this.route.snapshot.params.id;
    this.offerService.getOfferById(offerId).subscribe(
      offer => this.offer = offer,
      error => this.errorMessage = error as any);
  }
  onSubmit(offer: Offer) {
    const that = this;
    this.offerService.updateOffer(offer.id.toString(), offer).subscribe(
      res => this.gotoOfferDetail(offer),
      error => this.errorMessage = error as any
    );
  }
  gotoOfferDetail(offer: Offer) {
    this.errorMessage = null;
    this.router.navigate(['/offers', offer.id]);
  }
}
