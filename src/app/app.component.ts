import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { UtilsService } from './core/services/utils.service';
/**
 * @description
 * this component start application
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public bigSize$: Subject<boolean>;
  constructor(private utilsService: UtilsService) {
    this.bigSize$ = this.utilsService.bigSize$;
  }
}
