import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() image: string
  @Input() title: string
  @Input() category: string
  @Input() price: number
  @Input() rating: number

  getSolidStars() {
    return new Array(this.rating);
  }
  getRegularStarts() {
    return new Array(5 - this.rating);
  }
}
