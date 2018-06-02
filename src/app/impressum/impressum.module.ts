import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ImpressumRoutingModule } from "./impressum-routing.module";
import { ImpressumComponent } from "./impressum.component";

@NgModule({
  imports: [CommonModule, ImpressumRoutingModule],
  declarations: [ImpressumComponent]
})
export class ImpressumModule {}
