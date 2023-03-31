import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
  additem !: string;
  replaceterm !: string;
  searchterm !: string;
  results: any[]
  rep=false;

  Onrep(){
    this.rep=true;
  }

  show = false;
  Onshow(){
    if(this.show==false){
      this.show=true;
    }else{
      this.show=false;
    }
  }

 constructor(){
  this.results = [
    {
      summary: 'These are the results for the searched text',
    },
    {
      summary: 'Here are some more results you searched for',
    },
    {
      summary: 'Searching for answers, are we?',
    },
    {
      summary: 'What more could you ask for?',
    },
  ];
 }
 updateSearch(e : any){
  this.searchterm = e.target.value;
 }
 replace(b : any){
  this.replaceterm = b.target.value;
 }

 OnAdd(){
  this.results.push({summary : this.additem})
  this.additem= "";
 }
}
