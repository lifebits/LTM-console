import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() isShowDetails = false;

  @Output() closeDetailsEmitter = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closeDetailsEmitter.emit(false);
  }

  save() {
    this.closeDetailsEmitter.emit(false);
  }

}
