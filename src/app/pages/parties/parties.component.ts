import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent {

	@Input() forCardParties:string = 'parties';

	constructor(){}

	ngOnInit(): void {}

}
