import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { MaterialModule } from '../material/material.module';
import { SnackbarComponent } from './components/snackbar/snackbar.component';




@NgModule({
  declarations: [
    DialogComponent,
    SnackbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  entryComponents:[
    DialogComponent
  ]
})
export class SharedModule { }
