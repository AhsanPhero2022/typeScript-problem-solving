// Problem-1 : Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.

// resolve
function stringOrNumber(content: string | number): number {
  if (typeof content === "string") {
    return content.length;
  } else {
    return content * content;
  }
}

// Problem-2 : Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

// resolve
interface Person {
  phone?: string;
  address?: {
    city: string;
    street: string;
  };
}

function getAddressCity(person: Person): string | undefined {
  return person?.address?.city;
}

// Problem-3 : Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."

// resolve
class Cat {
  constructor(public name: string) {}
  meow(): void {}
}
function isCat(pet: {}): string {
  if (pet instanceof Cat) {
    return "Yes, it's a cat.";
  } else {
    return "No, it's not a cat.";
  }
}

// Problem-4 : You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

// Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.

// resolve
function mixArray(arr: (number | string)[]): number {
  let count = 0;
  arr.forEach((e) => {
    if (typeof e === "number") {
      count += e as number;
    }
  });
  return count;
}

// Problem-5 : Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.

// resolve
interface Car {
  make: string;
  model: string;
  year: number;
}
interface Driver {
  name: string;
  license: string;
}

function owner(car: Car, driver: Driver): Car & Driver {
  return { ...car, ...driver };
}

// Problem-6 : Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.

// resolve
function checkArr(asia: unknown): void {
  let count = 0;
  if (Array.isArray(asia) && asia.every((e) => typeof e === "number")) {
    asia.forEach((element) => {
      count += element;
    });
    console.log(count);
  } else {
    console.log("error");
  }
}

// Problem-7 : Create a TypeScript program that simulates a simple shopping cart. Define an interface Product with properties like name, price, and quantity. Implement a function that calculates the total cost of the items in the shopping cart. The function should take an array of Product objects as input and return the total cost.

// resolve
interface Product {
  name: string;
  price: number;
  quantity: number;
}

function Card(product: Product[]): number {
  let count = 0;
  product.map((e) => {
    const total = e.price * e.quantity;
    count += total;
  });
  return count;
}
