import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {
	@Input() forCardMembers: string = 'members';

	constructor(){}

	ngOnInit(): void {}
}
