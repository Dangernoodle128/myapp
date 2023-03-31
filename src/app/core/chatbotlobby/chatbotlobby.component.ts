import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chatbotlobby',
  templateUrl: './chatbotlobby.component.html',
  styleUrls: ['./chatbotlobby.component.scss']
})
export class ChatbotlobbyComponent {
show=true;

toggle(e:any){
  console.log(e)
  if(e.target.checked){
    this.show=false
  }else{
    this.show=true
  }
}
}
