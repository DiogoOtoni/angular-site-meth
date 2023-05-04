import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-members',
  templateUrl: './card-members.component.html',
  styleUrls: ['./card-members.component.css']
})
export class CardMembersComponent implements OnInit {
	@Input() memberNick:string = '';

	constructor(){

	}

	ngOnInit(): void {

	}

}
