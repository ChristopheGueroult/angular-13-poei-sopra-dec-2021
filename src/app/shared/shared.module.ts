import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';
import { TabLightComponent } from './components/tab-light/tab-light.component';
import { BtnLinkComponent } from './components/btn-link/btn-link.component';
import { BtnActionComponent } from './components/btn-action/btn-action.component';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TabLightComponent, BtnRouteComponent, BtnLinkComponent, BtnActionComponent, TotalPipe],
  imports: [CommonModule, RouterModule],
  exports: [TabLightComponent, BtnRouteComponent, TemplatesModule, IconsModule, BtnLinkComponent, BtnActionComponent, TotalPipe],
})
export class SharedModule {}
