import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SidebarService {
  sidebarOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);

  toggleSidebar(value: boolean) {
    this.sidebarOpened.next(value)
  }
}
