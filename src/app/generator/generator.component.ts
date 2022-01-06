import { Component, OnInit } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
dictionary: Array<string> = [];
letters: string = "";

//Set a timer
timer: any = 5;
myInterval: any = setInterval(()=>{
  this.timer= this.timer -1; 
  if(this.timer < 0){
    clearInterval(this.myInterval);
    this.timer="Time out"
  }
}, 1000);

  constructor() { }

  ngOnInit(): void {
    this.fillDictionary().then(() => {
      this.selectLetters();
      this.myInterval;
    })
    
  }

  //Read and split words in dictionary
  async fillDictionary(): Promise<void> {
    return fetch('assets/dictionary.txt')
    .then(response => response.text())
    .then(data => {
      this.dictionary = data.split(/\r?\n/);
    })
  }


  //Select 3 letters from a random word
  selectLetters(): void {
    const randomWord = this.dictionary[Math.floor(Math.random()*this.dictionary.length)];
    const randomWordLength = randomWord.length;
    const start = randomWordLength - 3;
    const selectStart = Math.floor(Math.random()*start) +1;
    const selectStop = selectStart +3;
    const selectSintagm = randomWord.slice(selectStart, selectStop)
    this.letters = selectSintagm;
  }


}
