import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Output() showDetailsEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  showDetails() {
    this.showDetailsEmitter.emit(true);
  }

}
