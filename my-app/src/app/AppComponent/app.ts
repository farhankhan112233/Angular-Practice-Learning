import { Component, signal } from '@angular/core';
import { SingleSlotProjection } from '../single-slot-projection/single-slot-projection.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiServiceTs } from '../Services/api.service.ts.js';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-component',
  imports: [CommonModule, FormsModule, SingleSlotProjection],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  product = signal<any>('');
  changePractice: string = '';
  sale!: string;
  name: string = 'Farhan';
  toggel: boolean = true;
  toDestroy: boolean = true;
  info = {
    title: 'Learning',
    name: 'Khan',
    display: true,
    age: 18,
    info: 'Tall',
  };
  observable = signal<any>([]);
  subscriber1?: any;
  constructor(public api: ApiServiceTs) {
    console.log('App root compoenent Constructor called');
  }
  destroy() {
    this.toDestroy = !this.toDestroy;
  }
  sub() {
    this.subscriber1 = this.api.obs.subscribe({
      next: (res) => {
        this.observable.update((current) => [...current, res]);
      },
      error: (err) => {
        console.log('Observable error', err);
      },
      complete: () => {
        console.log('Observable stream Completed');
        console.log(
          'After Completeion signal value',
          this.observable.toString()
        );
      },
    });
  }
  unsub() {
    this.subscriber1.unsubscribe();
    console.log('Unsubscribed');
  }

  show(): void {
    this.info.display = !this.info.display;
  }

  addProduct(value: string): void {
    this.sale = value;
  }
  data() {
    this.api.getApi().subscribe((res) => {
      this.product.set(res);
      console.log('Response ', res);
    });
  }
  onToggle() {
    this.toggel = !this.toggel;
  }
  edit(val: string): void {
    this.changePractice = val;
  }
}
