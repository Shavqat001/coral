import { Component } from '@angular/core';
import { DataService } from '../service';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.html',
  styleUrl: './style.css'
})

export class MainHeader {
  value: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.value$.subscribe(newValue => {
      this.value = newValue;
    });
  }

  show() {
    const modal: any = document.querySelector('.modal');
    modal.classList.add = 'block';
  }

  searchIcon: string = '/assets/img/search.svg';
  isHidden: boolean = true;
  searchClick = () => {
    if (this.isHidden) {
      this.isHidden = false
    } else {
      this.isHidden = true
    }
    console.log(this.isHidden);
  }
}
