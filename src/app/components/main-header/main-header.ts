import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.html',
  styleUrl: './style.css'
})

export class MainHeader {
  count = localStorage.getItem('count')
  @ViewChild('modal') modal!: ElementRef;
  
  selected = JSON.parse(localStorage.getItem('selected') || '{}');

  constructor(private cdr: ChangeDetectorRef) {}

  show() {
    this.modal.nativeElement.style.display = 'block';
    this.cdr.detectChanges();
  }

  closeModal() {
    this.modal.nativeElement.style.display = 'none';
    this.cdr.detectChanges();
  }

  searchIcon: string = '/assets/img/search.svg';
  isHidden: boolean = true;

  searchClick = () => {
    if (this.isHidden) {
      this.isHidden = false
    } else {
      this.isHidden = true
    }
  }
}
