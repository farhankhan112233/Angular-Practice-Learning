import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class localService {
  public saveData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  public removeData(key: string): void {
    localStorage.removeItem(key);
  }
  public showData(key: string): void {
    localStorage.getItem(key);
  }
  public clearData(): void {
    localStorage.clear();
  }
}
