app.service('mathService', mathService);

function mathService() {
  this.mathIt = function(numOne, numTwo, operand) {
    var ans = 0;
    operand == '+' ? ans = numOne + numTwo :
    operand == '-' ? ans = numOne - numTwo :
    operand == '/' ? ans = numOne / numTwo : ans = numOne * numTwo;
    if (!isNaN(ans)) {
      return ans.toString();
    }
  }
}
