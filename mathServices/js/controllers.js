app.controller('mathController', ['mathService', mathController]);

function mathController(mathService) {
  var vm = this;
  vm.answer = '';
  vm.math = mathService.mathIt;
}
