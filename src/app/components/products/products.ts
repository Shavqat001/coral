import { Component } from '@angular/core';
import { newService } from '../../service';

@Component({
  selector: 'products',
  templateUrl: './products.html',
  styleUrls: ['./style.css']
})

export class Products {
  constructor(public svc: newService) { }

  buy = (product: any) => {
    this.svc.increment();
    this.svc.add(product)
  }
}
