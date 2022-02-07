import { Component, OnInit, OnChanges} from '@angular/core';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

letters: string = "";
input: string ="";
message:string = '';
disabled: boolean = false
winCount: number = 0;

//Set timer
timer: number = 30;
myInterval: any = this.startInterval()
startInterval(){
  return setInterval(()=>{
    this.timer= this.timer -1; 
    if(this.timer < 1){
      clearInterval(this.myInterval);
      if(this.timer <= 0){
        this.disabled = true;
      }
    }
  }, 1000);
}

  constructor(private dictionaryService: DictionaryService) { }

  
  ngOnInit(): void {
    this.getDictionary();
    this.selectLetters();
  }

  

  getDictionary(): Array<string> {
    return this.dictionaryService.getDictionary();
  }

  //Select 3 letters from dictionary
  selectLetters(): void {
    const randomWord = this.getDictionary()[Math.floor(Math.random()*this.getDictionary().length)];
    const randomWordLength = randomWord.length;
    const start = randomWordLength - 3;
    const selectStart = Math.floor(Math.random()*start) +1;
    const selectStop = selectStart +3;
    const selectSintagm = randomWord.slice(selectStart, selectStop)
    this.letters = selectSintagm;
  }

  addInput(newInput:string){
    this.input = newInput;
    this.checkSolution();

  }

  checkSolution():void{
    if(this.getDictionary().indexOf(this.input)>=0 && this.timer>=0 && this.input.includes(this.letters)){
      this.selectLetters();
      this.timer = 30;
      this.winCount++
    } else if(this.getDictionary().indexOf(this.input)<0 || !this.input.includes(this.letters) && this.timer>=0 ) {
      // this.message = "Try again"

    } 
  }

  restart() {
    this.ngOnInit();
    this.timer=30;
    this.input='';
    this.message = '';
    this.disabled = false;
    this.myInterval;
    this.winCount =0;
  }

}

