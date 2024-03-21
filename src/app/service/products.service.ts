import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root',
})

export class ProductsService {
    public products: any[] = []
    public categoryList: Set<any>;


    public ratingVal: number = 5;
    public maxPrice: number = 0;
    public priceVal: number = 0;
    public productName: string = '';
    public categoryName: string = 'all';

    public getProducts(): void {
        fetch('https://dummyjson.com/products?limit=50')
            .then((res) => res.json())
            .then(data => this.products = data.products)
            .then(data => this.products.map(el => el.rating = Math.round(el.rating)))
            .then(data => this.categoryList = new Set(this.products.map(el => el.category)))
            .then(data => this.maxPrice = this.products.map(el => el.price).reduce((max, curVal) => Math.max(max, curVal), -Infinity))
            .then(data => this.priceVal = Math.round(this.maxPrice / 2))
    }

    public filteredProducts(): any[] {
        let val = this.productName.toLowerCase()
        return this.products
            .filter(el => el.title.toLowerCase().includes(val))
            .filter(el => this.categoryName === 'all' ? el.category !== this.categoryName : el.category === this.categoryName)
            .filter(el => el.price <= this.priceVal)
            .filter(el => el.rating <= this.ratingVal)
    }
}