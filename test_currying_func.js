var curriedAdd = function(a) {
  return function(b) {
    return function(c) {
      return function(d) {
        return a+b+c+d;
      }
    }
  };
};

var justAdd1 = curriedAdd(2);
var justAdd2 = justAdd1(2);
var justAdd3 = justAdd2(2);
var justAdd4 = justAdd3(2); // this is the last item and it fullfills all the vars

console.log(justAdd4);
