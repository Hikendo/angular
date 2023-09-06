import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerComponent } from './power/power.component';



@NgModule({
  declarations: [
    PowerComponent
  ],
  imports: [
    CommonModule
  ], exports:[

    PowerComponent
  ]
})
export class PowersModule { }
