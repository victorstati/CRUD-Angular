import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  product: Product = {
    id: 4,
    name: 'TESTE',
    price: 9.99
  };

  constructor(
    private router: Router,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    
  }

  createProduct(): void{
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado!");
      this.router.navigate(['/products']);
      console.log(this.product)
    });
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }
}
