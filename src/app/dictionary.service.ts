import { Injectable } from '@angular/core';
import {dictionary} from './dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }

  getDictionary(): Array<string>{
    return dictionary;
  }

}
