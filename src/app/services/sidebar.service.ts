import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SidebarService {
  sidebarOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);

  toggleSidebar() {
    this.sidebarOpened.next(!this.sidebarOpened.value)
  }
}
