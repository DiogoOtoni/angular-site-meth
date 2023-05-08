import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersServService {

  constructor(private http:HttpClient) { }

	getMembers(): Observable<any>{
		return this.http.get<any>('assets/data/members.json');
	}
}
