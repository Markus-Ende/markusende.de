import { Component, OnInit, HostBinding } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-aboutme",
  templateUrl: "./aboutme.component.html",
  styleUrls: ["./aboutme.component.scss"]
})
export class AboutmeComponent implements OnInit {
  @HostBinding("class.landscape") isLandscape: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.TabletLandscape,
        Breakpoints.WebLandscape
      ])
      .subscribe(result => (this.isLandscape = result.matches));
  }

  mailto(e: Event) {
    console.log("mailto:", e);
    e.srcElement.setAttribute("href", "mailto:blubb");
    // e.preventDefault();
    // e.stopPropagation();
  }
}
