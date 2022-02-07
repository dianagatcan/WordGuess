import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
// import { DictionaryService } from '../dictionary.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  word: string = "";
  @Input() status: boolean = false;

  @Output() newInput = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}


  sendInput(value: string){
    this.newInput.emit(value);
    this.word = '';
  }
   
}
