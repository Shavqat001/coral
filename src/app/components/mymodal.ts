import { Component } from '@angular/core';

@Component({
  selector: 'qwe',
  template: `
    <div>
      <h1>{{ title }}</h1>
      <button (click)="updateTitle()">Update Title {{ l }}</button>
    </div>
  `
})
export class QWE {
  title = 'Initial Title';
  l = 0;

  constructor() {
    this.updateLocalStorageData();
  }

  updateLocalStorageData() {
    const qwe = localStorage.getItem('counter');
    if (qwe !== null) {
      this.l = Number(qwe);
    }
  }

  updateTitle() {
    this.updateLocalStorageData();
    this.title = 'Updated Title ' + this.l;
  }
}
