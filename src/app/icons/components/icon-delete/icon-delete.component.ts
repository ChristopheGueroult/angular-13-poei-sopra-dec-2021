import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-icon-delete',
  templateUrl: './icon-delete.component.html',
  styleUrls: ['./icon-delete.component.scss'],
})
export class IconDeleteComponent implements OnInit {
  public myIcon = faTrashAlt;
  constructor() {}

  ngOnInit(): void {}
}
