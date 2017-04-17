import { NgModule } from '@angular/core';
import { MyComponentModule } from './src/app/my-component';

@NgModule({
  imports: [ MyComponentModule ],
  exports: [ MyComponentModule ]
})
export class ComponentsModule {
}
