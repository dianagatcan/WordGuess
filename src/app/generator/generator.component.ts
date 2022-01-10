import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../dictionary.service';


@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

// dictionary: Array<string> = [];

letters: string = "";

//Set timer
timer: any = 5;
myInterval: any = setInterval(()=>{
  this.timer= this.timer -1; 
  if(this.timer < 0){
    clearInterval(this.myInterval);
    this.timer="Time out"
  }
}, 1000);

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.getDictionary();
    this.selectLetters()
    //   this.myInterval;

  }

  getDictionary(): Array<string> {
    return this.dictionaryService.getDictionary();
  }

  //Select 3 letters from dictionary
  selectLetters(): void {
    const randomWord = this.getDictionary()[Math.floor(Math.random()*this.getDictionary.length)];
    const randomWordLength = randomWord.length;
    const start = randomWordLength - 3;
    const selectStart = Math.floor(Math.random()*start) +1;
    const selectStop = selectStart +3;
    const selectSintagm = randomWord.slice(selectStart, selectStop)
    this.letters = selectSintagm;
  }
}
