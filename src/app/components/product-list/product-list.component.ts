import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  public ProductsService = inject(ProductsService)
  
  ngOnInit(): void {
    this.ProductsService.getProducts()
  }
}
