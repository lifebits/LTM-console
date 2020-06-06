import { Component, OnInit } from '@angular/core';
import { DetailService } from "../../modals/detail.service";
import { ContentService } from "./content.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  isShowDetails = false;

  backlogTasks = [];
  reviewTasks = [];
  progressTasks = [];
  finishedTasks = [];

  activeCard;

  content = 'logging';

  constructor(
    private details: DetailService,
    private contentService: ContentService
  ) { }

  ngOnInit(): void {
    this.contentService.getAllTasks()
      .subscribe((res: Array<any>) => {
        this.backlogTasks = res.filter(data => data.status === 'backlog');
        this.reviewTasks = res.filter(data => data.status === 'review');
        this.progressTasks = res.filter(data => data.status === 'inprogress');
        this.finishedTasks = res.filter(data => data.status === 'success');
      });
  }

  openModal(id: string, card) {
    this.activeCard = card;
    this.details.open(id);
  }

  trackByFn(index, item) {
    return item.id;
  }

  closeModal(id: string) {
    this.details.close(id);
  }

  openContent(page: string) {
    this.content = page;
  }

}
