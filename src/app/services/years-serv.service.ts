import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs'
import { IYears } from '../interfaces/IYears';

@Injectable({
  providedIn: 'root'
})

export class YearsServService {

  constructor(private http: HttpClient) { }

	getAllYears():Observable<any>{
		return this.http.get<any>('assets/data/years.json')
	}
}
