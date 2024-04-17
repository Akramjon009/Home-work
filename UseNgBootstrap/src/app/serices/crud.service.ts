import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CreateUser } from '../models/create-user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseUrl: string = "https://localhost:7023/api/PersonCRUD/";

  constructor(private http : HttpClient) {}

  user?: User;

  getAll(): Observable<User[]> { 
    return this.http.get<User[]>(this.baseUrl + 'GetPersons');
  }

  create(data: CreateUser): Observable<CreateUser> {
    return this.http.post<User>(this.baseUrl + 'InsertPerson', data);
  }
}
