import { Component } from '@angular/core';
import { SubmitService } from 'src/app/shared/services/submit.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent {
  constructor(public submitservice : SubmitService){}

  Onshow(){
    this.submitservice.openSnackBar("இயல்பு ஸ்நாக்பார்","close",3000,"default")
  }
}
