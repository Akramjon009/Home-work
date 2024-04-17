import { Component } from '@angular/core';
import { CrudService } from '../../serices/crud.service';
import { User } from '../../models/user';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrl: './get-all.component.css'
})
export class GetAllComponent implements OnInit {
  products: User[] = [];

  constructor(private crudService : CrudService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.crudService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
