import { Component } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.html',
  styleUrls: ['./style.css']
})
export class MainHeader {
  isShow = false;

  selected = JSON.parse(localStorage.getItem('selected') || '{}');
  count = parseInt(localStorage.getItem('count') || '0');

  show() {
    this.isShow = true;
  }

  closeModal() {
    this.isShow = false;
  }

  searchIcon: string = '/assets/img/search.svg';
  isHidden: boolean = true;

  searchClick = () => {
    this.isHidden = !this.isHidden;
  }
}
