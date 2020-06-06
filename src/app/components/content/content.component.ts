import { Component, OnInit } from '@angular/core';
import { DetailService } from "../../modals/detail.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  isShowDetails = false;

  constructor(
    private details: DetailService
  ) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.details.open(id);
  }

  closeModal(id: string) {
    this.details.close(id);
  }

}
