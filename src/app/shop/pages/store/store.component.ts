import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardItemComponent } from '../../components/card-item/card-item.component';
import { ShopItemsService } from '../../shop-items.service';
import IShopItem from 'src/app/interfaces/IShopItem';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, CardItemComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit {


	items!: IShopItem[];

	constructor(private shopItemsService: ShopItemsService){}

	ngOnInit(): void {
		this.items = this.shopItemsService.getAll();
	}


}
