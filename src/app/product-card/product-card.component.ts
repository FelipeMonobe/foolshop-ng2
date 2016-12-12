import { Product } from './product'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'fs-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input('product') private _product: Product;

  public constructor() {}
}
