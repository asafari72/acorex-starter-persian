import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AXTopMenuLayoutComponent, AXTabularLayoutComponent } from "acorex-spa";

const routes: Routes = [
  {
    path: "",
    component: AXTopMenuLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
