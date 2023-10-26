import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['Dato 1', 'Dato 2', 'Dato 3']);
      }, 2000);
    });
  }

  getObservableData(): Observable<string[]> {
    return of(['Dato 1', 'Dato 2', 'Dato 3']);
  }
}

