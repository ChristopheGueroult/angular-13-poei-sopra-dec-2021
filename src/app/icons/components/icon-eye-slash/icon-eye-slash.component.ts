import { Component, OnInit } from '@angular/core';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-icon-eye-slash',
  templateUrl: './icon-eye-slash.component.html',
  styleUrls: ['./icon-eye-slash.component.scss'],
})
export class IconEyeSlashComponent implements OnInit {
  public myIcon = faEyeSlash;
  constructor() {}

  ngOnInit(): void {}
}
