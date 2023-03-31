import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string,time: number,type: string) {
    this._snackBar.openFromComponent(SnackbarComponent,{
      duration:time,
      data:{
        msg:message,
        act:action,
      },
      panelClass: type
    });
  }
}
