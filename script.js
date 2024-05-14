function Boo() {
  let count = 0;

  const iterator = {
    next: function() {
      count++;
      switch (count) {
        case 1:
          return { value: 1, done: false };
        case 2:
          return { value: 2, done: false };
        case 3:
          return { value: 3, done: false };
        default:
          return { value: undefined, done: true };
      }
    }
  };

  return iterator;
}

const iterator = Boo();
console.log(iterator.next().value); 
console.log(iterator.next().done); 
console.log(iterator.next().value);
console.log(iterator.next().done); 
console.log(iterator.next().value); 
console.log(iterator.next().done); 
console.log(iterator.next().value); 
console.log(iterator.next().done); 
