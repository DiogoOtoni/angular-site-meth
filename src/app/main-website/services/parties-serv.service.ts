import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IParties } from 'src/app/interfaces/IParties';

@Injectable({
  providedIn: 'root'
})
export class PartiesServService {

  constructor(private http:HttpClient) { }

	getParties():Observable<IParties[]>{
		return this.http.get<IParties[]>('assets/data/parties.json');
	}

}
