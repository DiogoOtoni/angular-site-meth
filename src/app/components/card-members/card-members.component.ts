import { Component, OnInit } from '@angular/core';
import { DataJsonServiceService } from 'src/app/services/data-json-service.service';

@Component({
  selector: 'app-card-members',
  templateUrl: './card-members.component.html',
  styleUrls: ['./card-members.component.css']
})
export class CardMembersComponent implements OnInit {
	memberName:string = '';

	constructor(private dataService:DataJsonServiceService){

	}

	ngOnInit(): void {

	}

}
