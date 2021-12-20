import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-plus-circle',
  templateUrl: './icon-plus-circle.component.html',
  styleUrls: ['./icon-plus-circle.component.scss'],
})
export class IconPlusCircleComponent implements OnInit {
  public myIcon = faPlusCircle;
  constructor() {}

  ngOnInit(): void {}
}
