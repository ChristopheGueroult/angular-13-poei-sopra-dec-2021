import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnActionComponent } from './components/btn-action/btn-action.component';
import { BtnLinkComponent } from './components/btn-link/btn-link.component';
import { BtnRouteComponent } from './components/btn-route/btn-route.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { TabLightComponent } from './components/tab-light/tab-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    TabLightComponent,
    BtnRouteComponent,
    BtnLinkComponent,
    BtnActionComponent,
    TotalPipe,
    StateDirective,
    FormSearchComponent,
    FilterComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, IconsModule],
  exports: [
    TabLightComponent,
    BtnRouteComponent,
    TemplatesModule,
    IconsModule,
    BtnLinkComponent,
    BtnActionComponent,
    TotalPipe,
    StateDirective,
    FormSearchComponent,
    FilterComponent,
  ],
})
export class SharedModule {}
