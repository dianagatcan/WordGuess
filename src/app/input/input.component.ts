import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { DictionaryService } from '../dictionary.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  word: string = "";

  @Output() newInput = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}


  sendInput(value: string){
    this.newInput.emit(value);
    this.word = '';
  }
   
}
