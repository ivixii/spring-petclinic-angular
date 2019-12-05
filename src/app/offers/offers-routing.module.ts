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
import {RouterModule, Routes} from '@angular/router';
import {OfferDetailComponent} from './offer-detail/offer-detail.component';
import {OfferListComponent} from './offer-list/offer-list.component';
import {OfferEditComponent} from './offer-edit/offer-edit.component';
import {OfferAddComponent} from './offer-add/offer-add.component';
import {PetAddComponent} from '../pets/pet-add/pet-add.component';

const offerRoutes: Routes = [
  {path: 'offers', component: OfferListComponent},
  {path: 'offers/add', component: OfferAddComponent},
  {path: 'offers/:id', component: OfferDetailComponent},
  {path: 'offers/:id/edit', component: OfferEditComponent},
  {path: 'offers/:id/pets/add', component: PetAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(offerRoutes)],
  exports: [RouterModule]
})

export class OffersRoutingModule {
}
