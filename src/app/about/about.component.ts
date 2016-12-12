import { Component } from '@angular/core'

@Component({
  selector: 'fs-app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {
  private _frontEndCard: any
  private _toolingCard: any

  public constructor() {
    this._frontEndCard = {
      info: {
        'angularjs-2': 'sequence to one of Google\'s biggest SPA frameworks',
        'google-material-lite': 'css framework based on Google\'s material design guidelines'
      },
      options: {
        title: 'FrontEnd',
        icon: 'color_lens'
      }
    }
    this._toolingCard = {
      info: {
        'angular-cli': 'command line interface for angular 2 scaffolding'
      },
      options: {
        title: 'Tooling',
        icon: 'build'
      }
    }
  }
}
