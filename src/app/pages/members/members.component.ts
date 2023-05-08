import { Component, Input } from '@angular/core';
import { IMembers } from 'src/app/interfaces/IMembers';
import { MembersServService } from 'src/app/services/members-serv.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

	@Input() membersData:IMembers[] | undefined;

	constructor(private dataService:MembersServService){}

	ngOnInit(): void {
		this.dataService.getMembers().subscribe(data => {
			this.membersData = data.members;
			console.log(this.membersData);
		})
	}

}
