import {Component, OnInit} from '@angular/core';
import {OfferService} from '../offer.service';
import {Offer} from '../offer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.css']
})
export class OwnerAddComponent implements OnInit {

  offer: Offer;
  errorMessage: string;

  constructor(private offerService: OfferService, private router: Router) {
    this.offer = {} as Offer;
  }

  ngOnInit() {
  }

  onSubmit(offer: Offer) {
    offer.id = null;
    this.offerService.addOffer(offer).subscribe(
      newOffer => {
        this.offer = newOffer;
        this.gotoOffersList();
      },
      error => this.errorMessage = error as any
    );
  }

  gotoOffersList() {
    this.router.navigate(['/offers']);
  }

}