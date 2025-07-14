import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  ElementRef,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login';

@Component({
  selector: 'app-single-slot-projection',
  imports: [CommonModule, FormsModule, LoginComponent],
  templateUrl: './single-slot-projection.html',
  styleUrl: './single-slot-projection.css',
})
export class SingleSlotProjection implements OnChanges {
  parent: string = 'Jhon Doe';
  identity: string = '';
  @ContentChild('temp') headTemp?: ElementRef;
  @Input() test!: string;
  @Input() person: any = '';
  @Input() name = '';
  @Output() product = new EventEmitter<string>();
  constructor() {
    console.log('Single-slot-Projection Component constructor called');
  }
  add(value: string): void {
    this.product.emit(value);
  }
  newEvent(value: string): void {
    this.identity = value;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Called from single slot component');
  }
  ngOnInit() {
    console.log('ngOniinit called from single slot projection');
  }
  ngDoCheck() {
    console.log('ngDoCheck From single slot component');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit from singleslot component');
  }
  ngAfterContentChecked() {
    console.log('calling from ngaftercontentchecked');
  }
  ngOnDestroy() {
    console.log('OnDestroy called');
  }
}
