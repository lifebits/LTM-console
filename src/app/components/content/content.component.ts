import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  isShowDetails = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(condition: boolean) {
    this.isShowDetails = condition;
  }

}
