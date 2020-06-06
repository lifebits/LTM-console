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

  ngOnInit(): void {
    // console.log('info', this.info);
  }

  showDetails() {
    this.showDetailsEmitter.emit('custom-modal');
  }

}
