import { Component } from '@angular/core'
import { Product } from '../product-card/product'

@Component({
  selector: 'fs-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  private _list: Product[]

  public constructor() {
    this._list = [
      new Product(1, 'e-Commerces', 1, 'ecommerces', ['ecommerce', 'shop']),
      new Product(2, 'Institutionals', 2, 'institutionals', ['institutional', 'enterprise']),
      new Product(3, 'Integrators', 3, 'integrators', ['integrator', 'database']),
      new Product(4, 'Social networks', 4, 'social-networks', ['social', 'network']),
      new Product(4, 'Optical character read', 4, 'optical-character-read', ['optical', 'ocr'])
    ]
  }
}
