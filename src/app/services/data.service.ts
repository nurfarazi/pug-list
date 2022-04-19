import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  pugs$ = new BehaviorSubject<string[]>([]);

  constructor(private http: HttpClient) {
    this.getImages().subscribe(it => this.pugs$.next(it));
  }

  getImages(): Observable<any> {
    return this.http.get<any>(`http://www.mocky.io/v2/5daffe6d2f00001172c1374b`).pipe(map(response => response.pugs));
  }

  public getPugById(id: number): any {
    return this.pugs$.getValue()[id];
  }
}
