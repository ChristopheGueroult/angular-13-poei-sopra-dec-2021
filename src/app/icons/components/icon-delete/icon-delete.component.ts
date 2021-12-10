import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-delete',
  templateUrl: './icon-delete.component.html',
  styleUrls: ['./icon-delete.component.scss'],
})
export class IconDeleteComponent implements OnInit {
  public myIcon = faTrash;
  constructor() {}

  ngOnInit(): void {}
}
