import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-night-mode',
  templateUrl: './icon-night-mode.component.html',
  styleUrls: ['./icon-night-mode.component.scss'],
})
export class IconNightModeComponent implements OnInit {
  public myIcon = faMoon;
  constructor() {}

  ngOnInit(): void {}
}
