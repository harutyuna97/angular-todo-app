import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class LoadingService {
  showLoading = false;

  constructor() {
  }

  show() {
    this.showLoading = true;
  }

  hide() {
    this.showLoading = false;
  }
}
