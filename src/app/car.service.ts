import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = 'https://valuable-adventurous-passbook.glitch.me/cars';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Car[]> { 
    return this.http.get<Car[]>(this.apiUrl);
  }

  getOneByID(id: number): Observable<Car> {
    return this.http.get<Car>(`${this.apiUrl}/${id}`);
  }

  create(Car: Car): Observable<Car> {
    return this.http.post<Car>(this.apiUrl, Car);
  }

  update(id: number, Car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.apiUrl}/${id}`, Car);
  }
  updateCar(Car: Car): Observable<Car> {
    const url = `${this.apiUrl}/${Car.id}`;
    return this.http.put<Car>(url, Car);
  }
  

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
 
}