

function receivesAFunction(callback) {
  callback(); 
}

function returnsANamedFunction() {
  function aNamedFunction() {
    console.log('This is will return a named function');
  }
  return aNamedFunction
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log('This is will return an anonymous function');
  };
}