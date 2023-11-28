import { Component, Input, OnInit } from '@angular/core';

import { IParties } from 'src/app/interfaces/IParties';
import { PartiesServService } from 'src/app/main-website/services/parties-serv.service';


@Component({
  selector: 'app-card-parties',
  templateUrl: './card-parties.component.html',
  styleUrls: ['./card-parties.component.css']
})
export class CardPartiesComponent implements OnInit{

	@Input() partyName: string = '';
	@Input() partyYear: number = 0;
	@Input() partyDescription: string = '';
	@Input() partyPhoto: string= '';

	@Input() anoCorrente!:number;

	@Input() partiesData: IParties[] | undefined;
	@Input() partiesByYear:IParties[] | undefined;

	constructor(private dataService:PartiesServService){}

	ngOnInit(): void {
		this.dataService.getParties()
		.subscribe(data => {
			this.partiesData = data;
			this.partiesByYear = data
			.filter((party:IParties) => party.year == this.anoCorrente);
			// this.getPartiesByYear();
		})
	}

	// getPartiesByYear(){
	// 	this.dataService.getParties()
	// 	.subscribe(data => {
	// 		this.partiesByYear = data.parties
	// 		.filter((party:any) => party.year == this.anoCorrente);
	// 	})
	// }
}
