export class Product {
    public id: number
    public name: string
    public categoryId: number
    public slug: string
    public tags: string[]

    public constructor(id, name, categoryId, slug, tags) {
      this.id = id
      this.name = name
      this.categoryId = categoryId
      this.slug = slug
      this.tags = tags
    }
}
