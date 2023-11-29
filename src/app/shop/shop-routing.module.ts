import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './pages/store/store.component';
import { ItemDetailsComponent } from './pages/item-details/item-details.component';

const shopRoutes: Routes = [
	{
		path:'loja',
		component: StoreComponent
	},
	{
		path:'loja/item/:id',
		component: ItemDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(shopRoutes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
