import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() info: any;

  @Output() showDetailsEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  showDetails() {
    this.showDetailsEmitter.emit('custom-modal');
  }

}
