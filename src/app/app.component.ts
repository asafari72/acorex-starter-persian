import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <ax-theme-wrapper>
      <router-outlet></router-outlet>
      <div id="logo" style="display:none">
        آنالیز هزینه
      </div>
    </ax-theme-wrapper>
  `
})
export class AppComponent { }
