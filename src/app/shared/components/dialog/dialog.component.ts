import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubmitService } from '../../services/submit.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public submitservice : SubmitService){}

  Onshowsnack(){
    this.submitservice.openSnackBar("The row has been deleted","clear",3000,"info")
  }
}
