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

import {Component, OnInit} from '@angular/core';
import {OfferService} from '../offer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Offer} from '../offer';


@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class offerDetailComponent implements OnInit {
  errorMessage: string;
  offer:Offer;

  constructor(private route: ActivatedRoute, private router: Router, private offerService: OfferService) {
    this.offer = {} as Offer;
  }

  ngOnInit() {
    const offerId = this.route.snapshot.params.id;
    this.offerService.getOfferById(offerId).subscribe(
      offer => this.offer = offer,
      error => this.errorMessage = error as any);
  }

  gotooffersList() {
    this.router.navigate(['/offers']);
  }

  editoffer() {
    this.router.navigate(['/offers', this.offer.id, 'edit']);
  }

  addPet(offer: Offer) {
    this.router.navigate(['/offers', offer.id, 'pets', 'add']);
  }


}
