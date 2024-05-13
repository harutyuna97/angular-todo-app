import {Component} from "@angular/core";
import {SidebarService} from "../../../services/sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent {

  sidebarVisible = true;
  constructor(
    private sidebarService: SidebarService
  ) {
    this.sidebarService.sidebarOpened.subscribe({
      next: value => {
        return this.sidebarVisible = value
      }
    })
  }

  hideSidebar() {
    this.sidebarService.toggleSidebar(false);
  }
}
