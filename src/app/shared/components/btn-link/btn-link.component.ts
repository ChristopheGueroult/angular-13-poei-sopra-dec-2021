import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-link',
  templateUrl: './btn-link.component.html',
  styleUrls: ['./btn-link.component.scss'],
})
export class BtnLinkComponent implements OnInit {
  @Input() text!: string;
  @Input() link!: string;
  constructor() {}

  ngOnInit(): void {}
}
