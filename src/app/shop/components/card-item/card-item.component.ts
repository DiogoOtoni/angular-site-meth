import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import IShopItem from 'src/app/interfaces/IShopItem';

@Component({
	selector: 'app-card-item',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './card-item.component.html',
	styleUrl: './card-item.component.css'
})
export class CardItemComponent {


	@Input() items!: IShopItem[];

	constructor(){}
}
