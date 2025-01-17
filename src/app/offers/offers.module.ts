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

import {NgModule} from '@angular/core';
import {OfferService} from './offer.service';
import {OfferListComponent} from './offer-list/offer-list.component';
import {OfferDetailComponent} from './offer-detail/offer-detail.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OfferAddComponent} from './offer-add/offer-add.component';
import {OfferEditComponent} from './offer-edit/offer-edit.component';
import {OffersRoutingModule} from './offers-routing.module';
import {PetsModule} from '../pets/pets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OffersRoutingModule,
    PetsModule
  ],
  declarations: [
    OfferListComponent,
    OfferDetailComponent,
    OfferEditComponent,
    OfferAddComponent
  ],
  providers: [OfferService]

})

export class OffersModule {
}
