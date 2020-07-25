import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash'
@Injectable({
  providedIn: 'root'
})
export class DokerbookService {

  constructor() { }
  form : FormGroup =new FormGroup({
    id: new FormControl(null,[Validators.required]),
    name: new FormControl(null),
    author: new FormControl(null),
    publication: new FormControl(null),
    category: new FormControl(null),
    pages: new FormControl(null),
    price:new FormControl(null),

  });
  popularform(id){
    this.form.setValue(id);
  }


}
