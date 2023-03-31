import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EqualvaluesService {

  constructor() { }
  Onequalvalues(form : any){
    if(form.value.password && form.value.confirm){
      return form.value.password == form.value.confirm
      ? null
      : form.get('confirm').setErrors({mismatch: true})
    }
  }
}
