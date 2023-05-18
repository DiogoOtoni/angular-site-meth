import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IMembers } from 'src/app/interfaces/IMembers';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements IMembers, OnInit, OnDestroy {
	name: string = '';
	nick: string = '';
	photo: string = '';
	dataEntrada: number = 0;
	dataSaida: number = 0;

	@Input() membersToShow!:IMembers;

	ngOnInit():void{
		this.name = this.membersToShow.name;
		this.nick = this.membersToShow.nick;
		this.dataEntrada = this.membersToShow.dataEntrada;
		this.dataSaida = this.membersToShow.dataSaida;
		this.photo = this.membersToShow.photo;
	}

	ngOnDestroy(): void {
	}
}
