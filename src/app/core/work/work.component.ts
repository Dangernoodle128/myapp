import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { EqualvaluesService } from 'src/app/shared/services/equalvalues.service';
import { ShowService } from 'src/app/shared/services/show.service';
import { SubmitService } from 'src/app/shared/services/submit.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {
  arr = ['CSE', 'ECE', 'IT', 'MECH'];
  constructor(public showservice: ShowService, public submitservice: SubmitService,public equalservice : EqualvaluesService) { }
  employeedetail!: FormGroup;

  ngOnInit() {
    this.employeedetail = new FormGroup({
      firstname: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      lastname: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z]+$')]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      alternativeEmail: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,16}$')]),
      confirm: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      fromdate: new FormControl(null),
      todate: new FormControl(null),
      contacts: new FormArray([]),
    },
    this.equalservice.Onequalvalues.bind(this)
    )
    this.createArray();
  }
  createArray() {
    if ((this.employeedetail.get('contacts') as FormArray).length < 2) {
      (this.employeedetail.get('contacts') as FormArray).push(
        new FormGroup({
          address: new FormControl(null, Validators.required),
          state: new FormControl(null),
          country: new FormControl(null),
        })
      );
    }
  }
  removeArray(i: number) {
    (this.employeedetail.get('contacts') as FormArray).removeAt(i);
  }
  getContacts() {
    return (this.employeedetail.get('contacts') as FormArray).controls;
  }
  getControls(form: any, i: number) {
    return form.get('contacts').controls[i].controls;
  }

  Onsubmit() {
    console.log(this.employeedetail.value);
  }

  today = new Date();

  Onshowsubmit() {
    if (this.employeedetail.valid) {
      this.submitservice.openSnackBar("Submitted Successfully", "done", 3000, "success")
    } else {
      this.submitservice.openSnackBar("Invalid Data", "clear", 3000, "error")
    }
  }
  show = false;
  onShow(value: number) {
    if (value == 1) {
      this.show = false;
      this.employeedetail.get('fromdate')?.reset(),
      this.employeedetail.get('todate')?.reset(),
      this.employeedetail.get('fromdate')?.clearValidators(),
      this.employeedetail.get('todate')?.clearValidators(),
      this.employeedetail.get('fromdate')?.updateValueAndValidity(),
      this.employeedetail.get('todate')?.updateValueAndValidity()
    } else {
      this.show = true;
      this.employeedetail.get('fromdate')?.setValidators(Validators.required),
      this.employeedetail.get('todate')?.setValidators(Validators.required)
    }
  }
}
