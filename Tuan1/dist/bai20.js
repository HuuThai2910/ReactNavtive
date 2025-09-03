"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeVehicle = exports.CarVehicle = void 0;
class CarVehicle {
    move() {
        console.log("Car is driving");
    }
}
exports.CarVehicle = CarVehicle;
class BikeVehicle {
    move() {
        console.log("Bike is pedaling");
    }
}
exports.BikeVehicle = BikeVehicle;
