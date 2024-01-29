export class Car {
    id: number;
    Name: string;
    Miles_per_Gallon: string;
    Cylinders: string;
    Displacement: string;
    Horsepower: string;
    Weight_in_lbs: string;
    Acceleration: string;
    Year: string;
    Origin: string;

    constructor(
        id: number,
        Name: string,
        Miles_per_Gallon: string,
        Cylinders: string,
        Displacement: string,
        Horsepower: string,
        Weight_in_lbs: string,
        Acceleration: string,
        Year: string,
        Origin: string
    ) {
        this.id = id;
        this.Name = Name;
        this.Miles_per_Gallon = Miles_per_Gallon;
        this.Cylinders = Cylinders;
        this.Displacement = Displacement;
        this.Horsepower = Horsepower;
        this.Weight_in_lbs = Weight_in_lbs;
        this.Acceleration = Acceleration;
        this.Year = Year;
        this.Origin = Origin;
    }
}
