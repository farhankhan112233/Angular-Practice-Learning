import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  @Input() fatherName!: string;
  @Output() motherName = new EventEmitter<string>();
  event(value: string): void {
    this.motherName.emit(value);
  }
}
