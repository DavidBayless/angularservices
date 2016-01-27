app.controller('TemplateController', ['person', 'square', TemplateController]);

function TemplateController(person, square) {
  var vm = this;
  vm.title = square(2);

}
