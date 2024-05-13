import {Component} from "@angular/core";
import {SidebarService} from "../../../services/sidebar.service";

@Component({
  selector: 'app-topbar',
  templateUrl: 'topbar.component.html',
  styleUrls: ['topbar.component.scss']
})

export class TopbarComponent {
  constructor(
    private sidebarService: SidebarService
  ) {
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
