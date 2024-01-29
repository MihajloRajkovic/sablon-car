import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent {
  carForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private carService: CarService) {
    this.carForm = this.formBuilder.group({
      name: ['', Validators.required],
      milesPerGallon: ['', Validators.required],
      cylinders: ['', Validators.required],
      displacement: ['', Validators.required],
      weightInLbs: ['', Validators.required],
      horsepower: ['', Validators.required],
      acceleration: ['', Validators.required],
      year: ['', Validators.required],
      origin: ['', Validators.required]
    });
  }

  onSubmit() {
    const name = this.carForm?.get('name')?.value;
    const miles_per_Gallon = this.carForm?.get('miles_per_Gallon')?.value;
    const cylinders = this.carForm?.get('cylinders')?.value;
    const displacement = this.carForm?.get('displacement')?.value;
    const weight_in_lbs = this.carForm?.get('weight_in_lbs')?.value;
    const horsepower = this.carForm?.get('horsepower')?.value;
    const acceleration = this.carForm?.get('acceleration')?.value;
    const year = this.carForm?.get('year')?.value;
    const origin = this.carForm?.get('origin')?.value;

    if (name !== null && miles_per_Gallon !== null && cylinders !== null && displacement !== null
      && weight_in_lbs !== null && horsepower !== null && acceleration !== null
      && year !== null && origin !== null) {
      const newSmartphone: Car = {
        id: 0, // Postavite odgovarajući ID, na primer, 0 za novi unos
        Name: name,
        Miles_per_Gallon: miles_per_Gallon,
        Cylinders: cylinders,
        Displacement: displacement,
        Weight_in_lbs: weight_in_lbs,
        Horsepower: horsepower,
        Acceleration: acceleration,
        Year: year,
        Origin: origin
      };
      this.carService.create(newSmartphone).subscribe((response) => {
        if (this.carForm) {
          this.carForm.reset();
        }
      });

      this.carForm.reset();
    }
  }
}
