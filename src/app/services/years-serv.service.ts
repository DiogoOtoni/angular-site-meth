import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs'
import { IYears } from '../interfaces/IYears';

@Injectable({
  providedIn: 'root'
})

export class YearsServService {

	urlYears:string = 'assets/data/years.json'

  constructor(private http: HttpClient) { }

	getAllYears():Observable<any>{
		return this.http.get<any>(this.urlYears)
	}
}
