import { Component, OnInit } from '@angular/core';
/**
 * @description
 * this component is user interface. we did this component to keep
 * possibility to change ui in project
 */
@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
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
