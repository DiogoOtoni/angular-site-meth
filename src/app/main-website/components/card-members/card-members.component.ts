import { Component, Input, OnInit } from '@angular/core';
import { IMembers } from 'src/app/interfaces/IMembers';
import { MembersServService } from 'src/app/main-website/services/members-serv.service';

@Component({
  selector: 'app-card-members',
  templateUrl: './card-members.component.html',
  styleUrls: ['./card-members.component.css']
})
export class CardMembersComponent implements OnInit {
	@Input() memberNick:string = '';
	memberCardShow:boolean = false;

	memSelecionado:any = null;

	@Input() anoCorrente!:number;
	@Input() membersData:IMembers[] | undefined;
	@Input() membersDataByYear:IMembers[] | undefined;

	constructor(private dataService:MembersServService){}

	ngOnInit(): void {
		this.dataService.getMembers().subscribe(data => {
			this.membersData = data;
			this.getMembersByYear();
		})
	}

	getMembersByYear(){
		if(this.anoCorrente === 2023){
			this.dataService.getMembers().subscribe(data => {
				this.membersDataByYear = data.filter((member:IMembers) =>
					member.dataSaida === null
				)
			})
		}else{
			this.dataService.getMembers().subscribe(data => {
				this.membersDataByYear = data.filter((member:IMembers) =>
					(member.dataSaida >= this.anoCorrente || member.dataSaida == null) && member.dataEntrada <= this.anoCorrente
				)
			})
		}
	}

	showDataMembers(mem:any):void{
		if(this.memSelecionado === mem){
			this.memSelecionado = null;
		}else{

			this.memSelecionado = mem;
		}
	}
}
