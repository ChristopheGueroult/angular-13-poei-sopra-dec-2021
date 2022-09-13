import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './components/ui/ui.component';
import { Ui2Component } from './components/ui2/ui2.component';
import { Ui3Component } from './components/ui3/ui3.component';

@NgModule({
  declarations: [UiComponent, Ui2Component, Ui3Component],
  imports: [CommonModule],
  exports: [UiComponent, Ui2Component, Ui3Component],
})
export class UiModule {}
