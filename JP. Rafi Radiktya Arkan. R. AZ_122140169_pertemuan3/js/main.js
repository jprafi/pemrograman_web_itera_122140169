import {
    demoVariables,
    demoArrowFunctions,
    demoTemplateLiterals,
    demoDestructuring,
    demoSpreadRest,
    demoDefaultParams,
    demoClasses,
    demoObjectLiterals,
    demoArrayMethods,
    demoPromises,
    demoAsyncAwait  
  } from './app.js';
  
  const outputElement = document.getElementById('output');
  const runButton = document.getElementById('runBtn');
  const clearButton = document.getElementById('clearBtn');
  
  function addOutput(title, code, result) {
    const outputItem = document.createElement('div');
    outputItem.className = 'output-item';
  
    const titleEl = document.createElement('div');
    titleEl.className = 'output-title';
    titleEl.textContent = title;
  
    const codeEl = document.createElement('div');
    codeEl.className = 'code';
    codeEl.textContent = code;
  
    const resultEl = document.createElement('div');
    resultEl.className = 'result';
    resultEl.textContent = result;
  
    outputItem.appendChild(titleEl);
    outputItem.appendChild(codeEl);
    outputItem.appendChild(resultEl);
    outputElement.appendChild(outputItem);
  }
  
  function clearOutput() {
    outputElement.innerHTML = '';
  }
  
  function runAllDemos() {
    clearOutput();
  
    const varResults = demoVariables();
    addOutput(
      "1. Let dan Const",
      "var vs let/const dan block scope",
      `var (function scope): ${varResults.oldVar}
  let (block scope): ${varResults.newLet}
  const (immutable): ${varResults.PI}
  const object (mutable content): ${JSON.stringify(varResults.user)}`
    );
  
    const arrowResults = demoArrowFunctions();
    addOutput(
      "2. Arrow Functions",
      "Perbandingan fungsi reguler dan arrow functions",
      `Regular function: ${arrowResults.regularSum}
  Arrow function: ${arrowResults.arrowSum}
  No params: ${arrowResults.sayHello}
  Single param: ${arrowResults.square}`
    );
  
    const templateResults = demoTemplateLiterals();
    addOutput(
      "3. Template Literals",
      "String concatenation vs template literals",
      `Old way: ${templateResults.oldWay}
  New way: ${templateResults.newWay}
  With expression: ${templateResults.expression}
  Multi-line: ${templateResults.multiLine}`
    );

    const destructuringResults = demoDestructuring();
    addOutput(
      "4. Destructuring",
      "Ekstraksi dari object dan array",
      `Object name: ${destructuringResults.name}
  Object age: ${destructuringResults.age}
  Array first: ${destructuringResults.first}
  Array third: ${destructuringResults.third}`
    );
  
    const spreadRestResults = demoSpreadRest();
    addOutput(
      "5. Spread dan Rest Operator",
      "Gabungkan dan ekstrak nilai dari array dan object",
      `Spread array: ${spreadRestResults.arr2}
  Spread object: ${JSON.stringify(spreadRestResults.obj2)}
  Rest sum: ${spreadRestResults.total}`
    );

    const defaultResults = demoDefaultParams();
    addOutput(
      "6. Default Parameters",
      "Fungsi dengan nilai parameter default",
      `Greet dengan nama: ${defaultResults.greet1}
  Greet default: ${defaultResults.greet2}`
    );
  
    const classResults = demoClasses();
    addOutput(
      "7. Classes",
      "Penerapan class dan inheritance",
      `Animal: ${classResults.animalSound}
  Dog: ${classResults.dogSound}`
    );
    const objectLiteralResults = demoObjectLiterals();
    addOutput(
      "8. Enhanced Object Literals",
      "Penulisan object yang lebih ringkas",
      `Old way greet: ${objectLiteralResults.oldWay}
  New way greet: ${objectLiteralResults.newWay}`
    );
  
    const arrayResults = demoArrayMethods();
    addOutput(
      "9. Array Methods",
      "Fungsi modern array seperti map, filter, reduce",
      `Doubled: ${arrayResults.doubled}
  Even: ${arrayResults.even}
  Total: ${arrayResults.total}`
    );  

    addOutput("10. Promises", "Operasi async dengan .then()", "");
    const promiseOutput = demoPromises();
    document.querySelector('.output-item:last-child .result').appendChild(promiseOutput);
  
    addOutput("11. Async/Await", "Operasi async dengan async/await", "");
    const asyncOutput = demoAsyncAwait();
    document.querySelector('.output-item:last-child .result').appendChild(asyncOutput);  
  }
  
  runButton.addEventListener('click', runAllDemos);
  clearButton.addEventListener('click', clearOutput);
  