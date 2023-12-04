import { Injectable } from '@angular/core';

import IShopItem from '../interfaces/IShopItem';

@Injectable({
  providedIn: 'root'
})
export class ShopItemsService {


	items: IShopItem[] = [
		{
			_idItem: 1,
			nameItem: "bandana",
			brandItem: "Meth",
			descriptionItem: "Bandana preta com vermelho e branco",
			priceItem: 15.99,
			imgItem: "sem imagem",
			quantityItem: 40,

			sizeItem: ['ÚNICO'],
		},
		{
			_idItem: 2,
			nameItem: "Camiseta Meth básica",
			brandItem: "Meth",
			descriptionItem: "camiseta meth básica 1",
			priceItem: 30.99,
			imgItem: "sem imagem",
			quantityItem: 40,

			sizeItem: ['P', 'M', 'G', 'GG', 'BABYLOOK P', 'BABYLOOK M', 'BABYLOOK G', 'BABYLOOK GG' ],
		},
		{
			_idItem: 3,
			nameItem: "Regata",
			brandItem: "Meth",
			descriptionItem: "Regata meth",
			priceItem: 25.99,
			imgItem: "sem imagem",
			quantityItem: 40,

			sizeItem: ['P', 'M', 'G', 'GG', 'BABYLOOK P', 'BABYLOOK M', 'BABYLOOK G', 'BABYLOOK GG' ],
		},
		{
			_idItem: 4,
			nameItem: "Colete",
			brandItem: "Meth",
			descriptionItem: "Colete carnaval fluorescente",
			priceItem: 20.99,
			imgItem: "sem imagem",
			quantityItem: 40,

			sizeItem: ['P', 'M', 'G', 'GG'],
		},
		{
			_idItem: 5,
			nameItem: "Samba canção",
			brandItem: "Meth",
			descriptionItem: "Samba canção meth básico 1",
			priceItem: 15.99,
			imgItem: "sem imagem",
			quantityItem: 40,

			sizeItem: ['P', 'M', 'G', 'GG'],
		},
	];

  constructor() { }

	getAll(){
		return this.items;
	}

	getById(id: number){
		return this.items.find((item) => item._idItem == id);
	}
}
