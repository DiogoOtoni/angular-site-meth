import { Component, Input } from '@angular/core';
import { IParties } from 'src/app/interfaces/IParties';
import { PartiesServService } from 'src/app/services/parties-serv.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css']
})
export class PartiesComponent {

	@Input() partiesData: IParties[] | undefined;

	constructor(private dataService:PartiesServService){}

	ngOnInit(): void {
		this.dataService.getParties().subscribe(data => {
			this.partiesData = data.parties;
			console.log(this.partiesData)
		})
	}
}
