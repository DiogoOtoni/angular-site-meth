import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopItemsService } from './shop-items.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		ShopRoutingModule
  ],
	providers: [ShopItemsService]
})
export class ShopModule { }
