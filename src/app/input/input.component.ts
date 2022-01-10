import { Component, OnInit, Input } from '@angular/core';
import { DictionaryService } from '../dictionary.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  word: string = "";

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }

  onKeydown(solution: string) {
   if(this.dictionaryService.getDictionary().indexOf(solution)>=0){
     console.log("true")
   } else {
     console.log("false")
   }
  }
   
}
