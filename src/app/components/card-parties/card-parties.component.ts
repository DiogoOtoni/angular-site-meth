import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-parties',
  templateUrl: './card-parties.component.html',
  styleUrls: ['./card-parties.component.css']
})
export class CardPartiesComponent {

	@Input() partyName: string = '';
	@Input() partyPhoto: string= '';


}
