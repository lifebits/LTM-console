import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Input() countTasks: number;

  @Output() sortEmitter = new EventEmitter();
  @Output() filterEmitter = new EventEmitter();

  searchForm = new FormGroup({
    search: new FormControl('')
  });

  get searchString() {
    return this.searchForm.get('search')
  };

  constructor() {
    this.searchString.valueChanges
      .subscribe(data => this.filterEmitter.emit(data));
  }

  ngOnInit(): void {
  }

  sortBy(param: string) {
    this.sortEmitter.emit(param);
  }

}
