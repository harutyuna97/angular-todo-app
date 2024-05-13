import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SidebarModule} from "primeng/sidebar";
import {RippleModule} from "primeng/ripple";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink, RouterLinkActive} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    RippleModule,
    TranslateModule,
    RouterLinkActive,
    RouterLink
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [
    SidebarComponent,
  ]
})

export class SharedModule { }
