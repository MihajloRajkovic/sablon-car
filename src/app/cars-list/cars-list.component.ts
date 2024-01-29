import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  cars: Car[] = [];
  searchKeyword: string = '';
  filteredcars: Car[] = [];

  constructor(private carservice: CarService, private router: Router) { }

  ngOnInit(): void {
    this.carservice.getAll().subscribe((data) => {
      console.log(data);
      this.cars = data;
      this.filteredcars = data;
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/cars', id]);
  }

  filtercars() {
    if (!this.searchKeyword) {
      this.filteredcars = this.cars;
    } else {
      this.filteredcars = this.cars.filter((Car) =>
        Car.Name.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
        Car.Year.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
  }
  deleteCar(id: number) {
    this.carservice.delete(id).subscribe(() => {

      this.cars = this.cars.filter(Car => Car.id !== id);
    });
  }
  editCar(id: number) { 
    this.router.navigate(['/edit', id]);
  }
  dodaj() {
this.router.navigate(['/create']);
  }

}
