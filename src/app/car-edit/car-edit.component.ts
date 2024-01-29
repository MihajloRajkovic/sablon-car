import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';
import { Car } from '../car.model';
 
@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {
   editCarForm: FormGroup;
   carId!: number;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private carService: CarService) 
    
    {
    this.editCarForm = this.formBuilder.group({
      name: ['', Validators.required],
      Miles_per_Gallon: ['', Validators.required],
      cylinders: ['', Validators.required],
      displacement: ['', Validators.required],
      weightInLbs: ['', Validators.required],
      horsepower: ['', Validators.required],
      acceleration: ['', Validators.required],
      year: ['', Validators.required],
      origin: ['', Validators.required],
      id: ['', Validators.required]
    });
  }
  idParamP: number | null = null; // Inicijalizujte sa null

  ngOnInit() {
    
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.idParamP = +idParam; // Pretvorite u broj
      this.carId = +idParam;

      // Dohvatite podatke o mobilnom telefonu sa servera
      this.carService.getOneByID(this.carId).subscribe(car => {
        this.editCarForm.patchValue({
          name: car.Name,
          id: car.id,
          year: car.Year,
          origin: car.Origin,
          acceleration: car.Acceleration,
          horsepower: car.Horsepower,
          cylinders: car.Cylinders,
          displacement: car.Displacement,
          Miles_per_Gallon: car.Miles_per_Gallon,
          weightInLbs: car.Weight_in_lbs,
       
        });
      });
    } else {
      // Ovde možete rukovati situacijom kada 'id' parametar nije prisutan u URL-u
      // Na primer, možete preusmeriti na stranicu sa porukom o grešci ili preusmeriti na listu mobilnih telefona.
    }
  }
  onSubmit() {
    const name = this.editCarForm?.get('name')?.value;
    const Miles_per_Gallon = this.editCarForm?.get('Miles_per_Gallon')?.value;
    const cylinders = this.editCarForm?.get('cylinders')?.value;
    const displacement = this.editCarForm?.get('displacement')?.value;
    const weight_in_lbs = this.editCarForm?.get('weight_in_lbs')?.value;
    const horsepower = this.editCarForm?.get('horsepower')?.value;
    const acceleration = this.editCarForm?.get('acceleration')?.value;
    const year = this.editCarForm?.get('year')?.value;
    const origin = this.editCarForm?.get('origin')?.value;

    if (name !== null && Miles_per_Gallon !== null && cylinders !== null && displacement !== null
      && weight_in_lbs !== null && horsepower !== null && acceleration !== null
      && year !== null && origin !== null) {
        if (typeof this.idParamP === 'number') {
        const newcar: Car = {
        id: this.idParamP, // Postavite odgovarajući ID, na primer, 0 za novi unos
        Name: name,
        Miles_per_Gallon: Miles_per_Gallon,
        Cylinders: cylinders,
        Displacement: displacement,
        Weight_in_lbs: weight_in_lbs,
        Horsepower: horsepower,
        Acceleration: acceleration,
        Year: year,
        Origin: origin
      };
      this.carService.updateCar(newcar).subscribe((response) => {
        if (this.editCarForm) {
          this.editCarForm.reset();
        } 
      });
    } else {
      // Ovde možete rukovati situacijom kada 'idParamP' nije broj
      // Na primer, možete prikazati poruku o grešci korisniku.
      console.error('idParamP nije broj.');
    }
      this.editCarForm.reset();
    }
  }
}
