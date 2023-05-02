import { Injectable } from '@angular/core';
import { dataYearsJson } from 'src/assets/data/dataYearsJson';

@Injectable({
  providedIn: 'root'
})

export class DataJsonServiceService {
	members:[] = [];
	constructor() {	}

	getDataYears(){
		return dataYearsJson;
	}

	getYear(index:number){
		return dataYearsJson[index].year;
	}

	getMembers(){
		return this.getDataYears().map(obj => obj.membersOn)

	}

	getParties(index:number){
		//dataYearsJson[index].members['members-on'][outroIndex].name
		return dataYearsJson[index].parties;
	}

}
