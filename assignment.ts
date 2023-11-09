
// result 1
function stringOrNumber(content: string | number): number {
    if (typeof content === 'string') {
        return content.length;
    } else {
      return content * content;
    }
  }

//  result 2
interface Person {
    phone?: string;
    address?: {
      city: string
      street: string
    }
}

function getAddressCity(person: Person): string | undefined {
    return person?.address?.city
  }

// result 3
class Cat {
    constructor(public name: string){}
    meow(): void{
       
    }
}


function isCat(pet: {}): string {
  if(pet  instanceof Cat){
    return ('Yes, it\'s a cat.');
  }
  else{
    return ('No, it\'s not a cat.');
  }
}





//   result 4

  function mixArray(arr : (number | string)[] ) : number {
    let count = 0
   arr.forEach(e => {
    if(typeof e === 'number'){
      count += e as number
    }
   });
   return count
  }
   

//  result 5

interface Car{
  make:string;
  model: string;
  year: number
}
interface Driver{
  name: string;
  license: string
}

function owner (car : Car, driver : Driver): Car & Driver {
  return {...car , ...driver}
}


// result 6

function checkArr(asia : unknown): void {
  let count = 0
if(Array.isArray(asia) && asia.every(e => typeof e === 'number')){
 asia.forEach(element => {
  count += element
   });
   console.log(count)
}else{
  console.log('error')
}
}

// result 7
interface Product {
  name: string;
  price: number;
  quantity: number;
}

function Card(product : Product[]): number {
  let count = 0
  product.map(e=> {
    const total = e.price*e.quantity
    count += total
  })
  return count;
}
