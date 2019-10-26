import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable, throwError as observableThrowError} from 'rxjs';
import {map, startWith, catchError} from 'rxjs/operators';

import { SendmailService } from '../sendmail.service';
/**
 * @title Chips Autocomplete
 */
@Component({
  selector: 'app-chips-autocomplete',
  templateUrl: 'chips-autocomplete.component.html',
  styleUrls: ['chips-autocomplete.component.css']
})
export class ChipsAutocompleteComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = false;

  separatorKeysCodes = [ENTER, COMMA];

  fruitCtrl = new FormControl();

  filteredFruits: Observable<any[]>;

  fruits = [];
  allFruits = [
    'Reorganization/redundancy/TUPE',
    'Disciplinary',
    'Sickness/Absence',
    'Grievance - Dignity at work',
    'Pay (overpaid)',
    'Annual leave',
    'Performance management',
    'Unsatisfactory performance',
    'Diversity and equality',
    'Pension',
    'Flexible working',
    'Health and safety',
    'Maternity',
    'Probation',
    'Whistle blowing',
    'Other'
  ];
  

  private result;
  private error;
  @ViewChild('fruitInput') fruitInput: ElementRef;


  constructor(private sendmailService: SendmailService) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this.filter(fruit) : this.allFruits.slice()));
  }

  // getHeroes() {
  //   this.sendmailService
  //     .sendPdfMail()
  //     .map(
  //       result => (this.result = result),
  //       error => (this.error = error)
  //     )
  // }
  
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: any): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  filter(name: string) {
    return this.allFruits.filter(fruit =>
        fruit.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
    const selection = event.option.viewValue;
    console.log('selected ', selection);


  }
}
