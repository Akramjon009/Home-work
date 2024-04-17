import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../serices/crud.service';
import { CreateUser } from '../../models/create-user';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent implements OnInit{
  isSubmitted: boolean = false;

  resultData!: CreateUser;

  setValue!: CreateUser;

  constructor(private crudService : CrudService) {}

  ngOnInit(): void {
    throw new Error('Method not impelemented.');
  }

  createUser(data: CreateUser) {
    this.crudService.create(data).subscribe({
      next: (result) => {
        this.resultData = result;
        console.log(result);
        this.isSubmitted = true;
      },
      error: (err) => {
        console.log(`Error ketti: ${err}`);
      }
    });
  }

  setUser(){
    this.createUser(this.setValue);
  }
}
