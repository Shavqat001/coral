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

  filtering(event: Event) {
    const target = event.target as HTMLElement;
    const listItem = target.closest('.products__item');
    const allItems = document.querySelectorAll('.products__item');
    allItems.forEach(item => {
      item.classList.remove('selected');
    });
    if (listItem) {
      listItem.classList.add('selected');
    }
  }

}
