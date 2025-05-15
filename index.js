 let result = null;

    window.onload = function () {
      result = document.getElementById('result');
    };

    function clearResult() {
      result.value = '';
    }

    function calculate(value) {
      try {
        if (value === '=') {
          result.value = eval(result.value);
        } else if (value === '%') {
          result.value = eval(result.value + "/100");
        } else if (value === 'sqrt') {
          result.value = Math.sqrt(eval(result.value));
        } else if (value === 'square') {
          result.value = Math.pow(eval(result.value), 2);
        } else if (value === 'pow3') {
          result.value = Math.pow(eval(result.value), 3);
        } else if (value === 'log') {
          result.value = Math.log(eval(result.value));
        } else if (value === 'sin') {
          result.value = Math.sin(eval(result.value));
        } else if (value === 'cos') {
          result.value = Math.cos(eval(result.value));
        } else if (value === 'tan') {
          result.value = Math.tan(eval(result.value));
        } else {
          result.value += value;
        }
      } catch (error) {
        result.value = 'Error';
      }
    }