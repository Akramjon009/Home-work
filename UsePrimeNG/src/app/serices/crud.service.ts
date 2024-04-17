import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl: string = "https://localhost:7023/api/PersonCRUD/GetPersons";

  constructor(private http : HttpClient) {}

  getAll(): Observable<User[]> { 
    return this.http.get<User[]>(this.baseUrl);
  }
}
