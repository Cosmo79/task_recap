console.log('Welcome');

/*
2.var variables can be re-declared and updated
  let is block scoped
  let can be updated but not re-declared
  const declarations are block scoped
  const cannot be updated or re-declared

3.
    function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

4.
    const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

deep copy:
var A1 = {a: "2"};
var A2 = Object.assign({}, A1);
var A3 = {...A1};  // Spread Syntax
console.log(A3);

5.
    concat(), join(), slice(), indexof(), forEach(), pop(), slice(), map(), etc
    ex:

    let fish = ['piranha', 'barracuda', 'koi', 'eel']

// Print out each item in the array
let printFish = fish.map((individualFish) => {
  console.log(individualFish)
})

printFish


6. 
    6.1 
      function successCallback(result) {
    console.log("Audio file ready at URL: " + result);
  }

  function failureCallback(error) {
    console.error("Error generating audio file: " + error);
  }

  createAudioFileAsync(audioSettings, successCallback, failureCallback);

  6.2
    const promise = doSomething();
    const promise2 = doSomething().then(successCallback, failureCallback);

7.
    function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

8.
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding
    state (the lexical environment). In other words, a closure gives you access to an outer function’s scope
    from an inner function. In JavaScript, closures are created every time a function is created, at function
    creation time.
*/
