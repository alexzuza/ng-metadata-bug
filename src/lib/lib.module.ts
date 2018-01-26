import { NgModule } from '@angular/core';

import { LibDirective } from './directives/index';


@NgModule({
  declarations: [LibDirective],
  exports: [LibDirective]
})
export class LibModule { }