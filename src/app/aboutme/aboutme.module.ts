import { AboutmeRoutingModule } from "./aboutme-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutmeComponent } from "./aboutme.component";

@NgModule({
  imports: [CommonModule, AboutmeRoutingModule],
  declarations: [AboutmeComponent]
})
export class AboutmeModule {}
