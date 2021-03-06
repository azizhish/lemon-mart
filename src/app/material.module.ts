import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
} from '@angular/material'

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTooltipModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatTooltipModule],
})
export class MaterialModule {}
