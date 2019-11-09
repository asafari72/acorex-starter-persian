import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ACoreXUIModule } from "acorex-ui";
import {
  ACoreXSPAModule,
  AXNavMenuService,
  AXHeaderBarMenuService
} from "acorex-spa";
import { NavMenuService } from "./shared/services/nav-menu.service";
import { HeaderBarMenuService } from "./shared/services/header-bar-menu.service";
import { SharedModule } from "./shared/shared.module";
import { StarterDashboardModule } from "./modules/starter/dashboard/config/dashboard.module";
import { AnalysisModule } from './modules/analysis/config/analysis.module';
import { ACCostsPage } from './modules/analysis/pages/cost/costs.page';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StarterDashboardModule,
    ACoreXUIModule,
    ACoreXSPAModule,
    AnalysisModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: "startUpTab",
      useValue: {
        content: ACCostsPage,
        title: "لیست صورت حساب",
        closable: false
      }
    },
    {
      provide: AXNavMenuService,
      useClass: NavMenuService
    },
    {
      provide: AXHeaderBarMenuService,
      useClass: HeaderBarMenuService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
