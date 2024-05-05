import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'collection',
  templateUrl: './collection.html',
  styleUrls: ['./style.css']
})
export class Collection implements AfterViewInit {
  @ViewChild('wrapper') wrapper!: ElementRef;

  position = 0;
  interval: any;

  ngAfterViewInit(): void {
    this.interval = setInterval(() => {
      this.position += 1320;
      if (this.position > 9240) {
        this.position = 0;
      }
      console.log(this.position);
      this.scrollToPosition();
    }, 3000);
  }

  scrollToPosition(): void {
    if (this.wrapper) {
      this.wrapper.nativeElement.scrollTo({
        left: this.position,
        behavior: 'smooth'
      });
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval); // Clear the interval when component is destroyed
  }
}
