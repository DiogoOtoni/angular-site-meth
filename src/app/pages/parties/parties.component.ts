import { Component } from '@angular/core';
import { DataJsonServiceService } from 'src/app/services/data-json-service.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent {
	yearsJsonAll: any[] | undefined;
	year:number = 0;
	yearDescription:string='';
	index:number = 0;

	constructor(private dataService:DataJsonServiceService){}

	ngOnInit(): void {
		this.yearsJsonAll = this.dataService.getDataYears();
		this.year = this.dataService.getYear(this.index);
	}
}
