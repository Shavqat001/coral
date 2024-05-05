import { Component } from '@angular/core';

@Component({
  selector: 'main-footer',
  templateUrl: './main-footer.html',
  styleUrl: './style.css'
})

export class MainFooter {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
