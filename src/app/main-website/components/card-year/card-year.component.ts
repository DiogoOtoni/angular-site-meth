import { Component, Input, OnInit } from '@angular/core';

import { IYears } from 'src/app/interfaces/IYears';
import { YearsServService } from 'src/app/main-website/services/years-serv.service';

@Component({
  selector: 'app-card-year',
  templateUrl: './card-year.component.html',
  styleUrls: ['./card-year.component.css']
})

export class CardYearComponent implements OnInit {
	@Input() yearsData: IYears[] | undefined;

	@Input() cardTypeCY!: string;

	constructor(private dataService:YearsServService){}

	ngOnInit(): void {
		this.dataService.getAllYears().subscribe(data => {
			this.yearsData = data;
		})

	}


}
