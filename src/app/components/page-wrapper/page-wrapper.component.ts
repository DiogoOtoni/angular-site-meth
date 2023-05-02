import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.css']
})
export class PageWrapperComponent implements OnInit{
	@Input() titlePW: number = 0;
	@Input() descriptionPW: string = '';
  @Input() itemsPW: [] = [];

	@Input() cardTypePW: string = '';
  @Input() cardTitlePW: string = '';

	constructor(){}

	ngOnInit(): void {

	}

}
