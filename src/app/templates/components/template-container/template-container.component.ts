import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrls: ['./template-container.component.scss'],
})
export class TemplateContainerComponent implements OnInit {
  @Input() title: string;
  constructor() {
    // mock title
    this.title = 'default title';
  }

  ngOnInit(): void {}
}
