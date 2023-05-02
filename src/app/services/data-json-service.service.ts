import { Injectable } from '@angular/core';
import { dataYearsJson } from 'src/assets/data/dataYearsJson';

@Injectable({
  providedIn: 'root'
})

export class DataJsonServiceService {
	constructor() {	}

	getDataYears(){
		return dataYearsJson;
	}

	getYear(index:number){
		return dataYearsJson[index].year;
	}

	getMembers(){
		return
	}

}
