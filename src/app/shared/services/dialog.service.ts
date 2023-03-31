import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private openDialog: MatDialog) {}
opendialog(message:string){
    return this.openDialog.open(DialogComponent,{
      data:{
        content:message
      },
    autoFocus:false,
    width:'400px'
  })
}
}
