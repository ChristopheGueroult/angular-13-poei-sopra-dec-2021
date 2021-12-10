import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.scss'],
})
export class Ui2Component implements OnInit {
  /**
   * property open is used in toggle function. default value is true because
   * we want nav open when we arrived on the app
   */
  public open: boolean;
  constructor() {
    this.open = true;
  }

  ngOnInit(): void {}
  /**
   * @function
   * this function is used to open or close nav
   */
  public toggle(): void {
    this.open = !this.open;
  }
}
