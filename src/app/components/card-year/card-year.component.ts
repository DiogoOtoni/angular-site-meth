import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-year',
  templateUrl: './card-year.component.html',
  styleUrls: ['./card-year.component.css']
})

export class CardYearComponent implements OnInit {
	@Input() yearTitle:number = 0;
	@Input() descriptionYear:string = '';
	@Input() itemsCY:[] = [];

	@Input() cardTypeCY:string = '';

	constructor(){}

	ngOnInit(): void {
		console.log(this.itemsCY)

	}
}
