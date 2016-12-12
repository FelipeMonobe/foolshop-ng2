import { Component, Input, OnInit } from '@angular/core'
import { CapitalizePipe } from '../shared/capitalize.pipe'

@Component({
  selector: 'fs-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})

export class InfoCardComponent implements OnInit {
  @Input('options') private _options: any
  @Input('info') private _info: any
  private _properties: any[]

  public constructor() { }
  public ngOnInit() {
    this._properties = Object.keys(this._info)
      .map(p => ({ name: p, value: this._info[p] }))
  }
}
