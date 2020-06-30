import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<div>{{ 'HELLO' | translate:param }}</div>`,
})

export class AppComponent {
  title = 'AngularCDB';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr'])
    translate.setDefaultLang('fr');
    translate.use('fr');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
  }
}
