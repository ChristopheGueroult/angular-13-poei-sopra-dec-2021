import { Component, OnInit } from '@angular/core';
import { faSun } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-day-mode',
  templateUrl: './icon-day-mode.component.html',
  styleUrls: ['./icon-day-mode.component.scss'],
})
export class IconDayModeComponent implements OnInit {
  public myIcon = faSun;
  constructor() {}

  ngOnInit(): void {}
}
