import { Component, OnInit } from '@angular/core';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-list-items',
  templateUrl: './icon-list-items.component.html',
  styleUrls: ['./icon-list-items.component.scss'],
})
export class IconListItemsComponent implements OnInit {
  public myIcon = faListAlt;
  constructor() {}

  ngOnInit(): void {}
}
