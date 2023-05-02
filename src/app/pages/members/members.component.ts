import { Component } from '@angular/core';
import { DataJsonServiceService } from 'src/app/services/data-json-service.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

	yearsJsonAll: any[] | undefined;
	allMembers: any[] | undefined;


	constructor(private dataService:DataJsonServiceService){}

	ngOnInit(): void {
		this.yearsJsonAll = this.dataService.getDataYears();
		// this.allMembers = this.dataService.getMembers();
	}

}
