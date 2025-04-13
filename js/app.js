// ----------------------------
// Let dan Const
// ----------------------------
export function demoVariables() {
    var oldVar = "Old variable";
    {
      var oldVar = "Changed inside block";
    }
  
    let newLet = "New let variable";
    {
      let newLet = "Different variable inside block";
      console.log("newLet inside block:", newLet);
    }
  
    const PI = 3.14159;
    const user = { name: "John", age: 30 };
    user.age = 31;
  
    return {
      oldVar,
      newLet,
      PI,
      user
    };
  }
  
  // ----------------------------
  // Arrow Functions
  // ----------------------------
  export function demoArrowFunctions() {
    function regularSum(a, b) {
      return a + b;
    }
  
    const arrowSum = (a, b) => a + b;
    const sayHello = () => "Hello World!";
    const square = x => x * x;
  
    return {
      regularSum: regularSum(5, 3),
      arrowSum: arrowSum(5, 3),
      sayHello: sayHello(),
      square: square(4)
    };
  }
  
  // ----------------------------
  // Template Literals
  // ----------------------------
  export function demoTemplateLiterals() {
    const name = "John";
    const age = 30;
  
    const oldWay = "Nama saya " + name + " dan umur saya " + age + " tahun.";
    const newWay = `Nama saya ${name} dan umur saya ${age} tahun.`;
    const multiLine = `
  Ini adalah string multi-baris.
  Nama: ${name}
  Umur: ${age}
  `;
    const expression = `Tahun lahir: ${new Date().getFullYear() - age}`;
  
    return {
      oldWay,
      newWay,
      multiLine,
      expression
    };
  }  

  export function demoDestructuring() {
    const person = { name: "Alice", age: 25, city: "Jakarta" };
    const { name, age } = person;
  
    const colors = ["red", "green", "blue"];
    const [first, , third] = colors;
  
    return {
      name,
      age,
      first,
      third
    };
  }
  
  export function demoSpreadRest() {
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1, 4, 5];
  
    const obj1 = { a: 1, b: 2 };
    const obj2 = { ...obj1, c: 3 };
  
    function sum(...numbers) {
      return numbers.reduce((a, b) => a + b, 0);
    }
  
    const total = sum(1, 2, 3, 4);
  
    return {
      arr2,
      obj2,
      total
    };
  }

  export function demoDefaultParams() {
    function greet(name = "Guest") {
      return `Hello, ${name}!`;
    }
  
    const greet1 = greet("Andi");
    const greet2 = greet();
  
    return {
      greet1,
      greet2
    };
  }
  
  export function demoClasses() {
    class Animal {
      constructor(name) {
        this.name = name;
      }
  
      speak() {
        return `${this.name} makes a sound.`;
      }
    }
  
    class Dog extends Animal {
      speak() {
        return `${this.name} barks.`;
      }
    }
  
    const genericAnimal = new Animal("Animal");
    const dog = new Dog("Doggo");
  
    return {
      animalSound: genericAnimal.speak(),
      dogSound: dog.speak()
    };
  }
  
  export function demoObjectLiterals() {
    const name = "Alice";
    const age = 25;
  
    const oldWay = {
      name: name,
      age: age,
      greet: function () {
        return "Hello!";
      }
    };
  
    const newWay = {
      name,
      age,
      greet() {
        return "Hi!";
      }
    };
  
    return {
      oldWay: oldWay.greet(),
      newWay: newWay.greet()
    };
  }
  
  export function demoArrayMethods() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(n => n * 2);
    const even = numbers.filter(n => n % 2 === 0);
    const total = numbers.reduce((a, b) => a + b, 0);
  
    return {
      doubled,
      even,
      total
    };
  }  

  export function demoPromises() {
    const status = document.createElement('div');
    status.className = 'result';
  
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Data berhasil diambil!");
        }, 1000);
      });
    };
  
    fetchData().then(res => {
      status.textContent = res;
    });
  
    return status;
  }
  
  export function demoAsyncAwait() {
    const result = document.createElement('div');
    result.className = 'result';
  
    const getData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      result.textContent = "Data async/await berhasil diambil!";
    };
  
    getData();
  
    return result;
  }  