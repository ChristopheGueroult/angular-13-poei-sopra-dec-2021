import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-action',
  templateUrl: './btn-action.component.html',
  styleUrls: ['./btn-action.component.scss'],
})
export class BtnActionComponent implements OnInit {
  @Input() text!: string;
  constructor() {}

  ngOnInit(): void {}
  public action(): void {
    console.log('btn action clicked');
  }
}
