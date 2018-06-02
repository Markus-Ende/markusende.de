import { AboutmeRoutingModule } from "./aboutme-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutmeComponent } from "./aboutme.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [CommonModule, AboutmeRoutingModule, MatButtonModule, MatIconModule],
  declarations: [AboutmeComponent]
})
export class AboutmeModule {}
