class Vehicle {
  drive(): void {
    console.log("chugaa chugaa");
  }

  honk(): void {
    console.log("beeb");
  }
}

class Car extends Vehicle {}

const car = new Car();

car.drive();
car.honk();
