import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() dictionary: Array<string> = [];

  word: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onKeydown() {
  }
   
}
