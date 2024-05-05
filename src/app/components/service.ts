// data.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private valueSubject = new BehaviorSubject<number>(0);
  value$ = this.valueSubject.asObservable();

  constructor() {}

  updateValue(newValue: number) {
    this.valueSubject.next(newValue);
  }

  incrementValue() {
    this.valueSubject.next(this.valueSubject.value + 1);
  }
}
