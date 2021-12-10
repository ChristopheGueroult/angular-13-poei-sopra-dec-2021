import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-cols',
  templateUrl: './template-cols.component.html',
  styleUrls: ['./template-cols.component.scss'],
})
export class TemplateColsComponent implements OnInit {
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
