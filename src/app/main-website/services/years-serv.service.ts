import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { IYears } from 'src/app/interfaces/IYears';

@Injectable({
  providedIn: 'root'
})

export class YearsServService {

	urlYears:string = 'assets/data/years.json'

  constructor(private http: HttpClient) { }

	getAllYears():Observable<IYears[]>{
		return this.http.get<IYears[]>(this.urlYears)
	}
}
