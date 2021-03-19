
//Exemplu de closure

let add = ( () => {
  let counter = 0;
  return () => {
    counter += 1;
    return counter;
    }
})();

add();
add();
console.log(add()); // raspunsul este 3, observam ca permite functiei sa aibe variabile 'private'
