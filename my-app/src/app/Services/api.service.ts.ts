import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceTs {
  obs = new Observable<number>((data) => {
    setTimeout(() => {
      data.next(1);
      console.log('1');
    }, 1000);
    setTimeout(() => {
      data.next(2);
      console.log('2');
    }, 2000);
    setTimeout(() => {
      data.next(3);
      console.log('3');
    }, 3000);
    setTimeout(() => {
      data.next(4);
      console.log('4');
    }, 4000);
    setTimeout(() => {
      data.complete();
    }, 5000);
  });
  constructor(public http: HttpClient) {}

  getApi(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/7');
  }
}
