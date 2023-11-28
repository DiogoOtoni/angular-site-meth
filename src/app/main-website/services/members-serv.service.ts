import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMembers } from 'src/app/interfaces/IMembers';

@Injectable({
  providedIn: 'root'
})
export class MembersServService {

  constructor(private http:HttpClient) { }

	getMembers(): Observable<IMembers[]>{
		return this.http.get<IMembers[]>('assets/data/members.json');
	}
}
