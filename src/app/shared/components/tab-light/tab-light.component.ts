import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-tab-light',
  templateUrl: './tab-light.component.html',
  styleUrls: ['./tab-light.component.scss'],
})
export class TabLightComponent implements OnInit {
  @Input() headers!: string[];
  @Input() collection!: Order[];
  constructor() {
    console.log(this.headers);
    console.log(this.collection);
  }
  ngOnChanges(): void {
    console.log(this.headers);
    console.log(this.collection);
  }
  ngOnInit(): void {
    console.log(this.headers);
    console.log(this.collection);
  }
}
