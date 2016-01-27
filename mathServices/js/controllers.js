app.controller('mathController', ['mathService', mathController]);

function mathController(mathService) {
  var vm = this;

  vm.math = mathService.mathIt;
}
