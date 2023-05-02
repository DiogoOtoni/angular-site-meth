import { Component, Input, OnInit } from '@angular/core';
import { DataJsonServiceService } from 'src/app/services/data-json-service.service';

@Component({
  selector: 'app-card-year',
  templateUrl: './card-year.component.html',
  styleUrls: ['./card-year.component.css']
})
export class CardYearComponent implements OnInit {
	@Input() yearTitle:number = 0;
	@Input() descriptionYear:string = '';

	constructor(private dataService:DataJsonServiceService){}

	ngOnInit(): void {

	}
}
