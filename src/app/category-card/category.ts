export class Category {
  public id: number
  public name: string
  public subCategoryIds: number[]

  constructor(id, name, subCategoryIds) {
    this.id = id
    this.name = name
    this.subCategoryIds = subCategoryIds
  }
}
