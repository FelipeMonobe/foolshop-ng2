import { Component } from '@angular/core'
import { Category } from '../category-card/category'

@Component({
  selector: 'fs-app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent {
  private _list: Category[]

  constructor() {
    this._list = [
      new Category(1, 'Front-end', [5]),
      new Category(2, 'Back-end', [3,4]),
      new Category(3, 'Javascript', []),
      new Category(4, '.NET', []),
      new Category(5, 'AngularJS', [])
    ]
  }
}
