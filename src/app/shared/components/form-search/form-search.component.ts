import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
})
export class FormSearchComponent implements OnInit {
  public search = new FormControl('');
  @Output() expression: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(300)).subscribe((data) => {
      this.expression.emit(data);
    });
  }
}
