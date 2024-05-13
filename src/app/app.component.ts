import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LoadingService} from "./services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private loadingService: LoadingService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  public get showLoading() {
    return this.loadingService.showLoading;
  }

  title = 'todo-app';
}
