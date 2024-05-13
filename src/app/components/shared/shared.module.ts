import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {SidebarModule} from "primeng/sidebar";
import {RippleModule} from "primeng/ripple";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TopbarComponent} from "./topbar/topbar.component";
import {ToolbarModule} from "primeng/toolbar";
import {AvatarModule} from "primeng/avatar";

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    RippleModule,
    TranslateModule,
    RouterLinkActive,
    RouterLink,
    ToolbarModule,
    AvatarModule
  ],
  exports: [
    SidebarComponent,
    TopbarComponent
  ],
  declarations: [
    SidebarComponent,
    TopbarComponent
  ]
})

export class SharedModule { }
