import { Component } from '@angular/core';

@Component({
  selector: 'best-sellers',
  templateUrl: './best-sellers.html',
  styleUrl: './style.css'
})

export class BestSellers {
  filters(e: Event) {
    console.log(e.target as HTMLElement)
  }
}
