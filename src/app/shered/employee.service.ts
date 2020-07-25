import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  form : FormGroup =new FormGroup({
    $key:new FormControl(null),
    name: new FormControl(null),
    author: new FormControl(null),
    publication: new FormControl(null),
    category: new FormControl(null),
    pages: new FormControl(null),
    price:new FormControl(null),

  });
}
