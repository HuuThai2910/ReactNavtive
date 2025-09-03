interface Vehicle {
  move(): void;
}

export class CarVehicle implements Vehicle {
  move(): void {
    console.log("Car is driving");
  }
}

export class BikeVehicle implements Vehicle {
  move(): void {
    console.log("Bike is pedaling");
  }
}