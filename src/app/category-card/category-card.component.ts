import { Category } from './category'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'fs-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})

export class CategoryCardComponent {
  @Input('category') private _category: Category

  constructor() {}
}
