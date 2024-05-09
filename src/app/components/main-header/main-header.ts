import { Component } from '@angular/core';
import { newService } from '../../service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.html',
  styleUrls: ['./style.css']
})
export class MainHeader {
  constructor(public svc: newService) { }

  isShow = false;

  show() {
    this.isShow = true;
  }

  closeModal() {
    this.isShow = false;
  }

  searchIcon: string = '/assets/img/search.svg';
  isHidden: boolean = true;

  clearBasket() {
    this.svc.clear()
  }

  searchClick = () => {
    this.isHidden = !this.isHidden;
  }
}
