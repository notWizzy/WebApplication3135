let result = document.getElementById("result");
document.getElementById("clear").addEventListener("click", () => clearResult());
document.getElementById("delete").addEventListener("click", () => deleteLastChar());
document.getElementById("divide").addEventListener("click", () => calculate('/'));
document.getElementById("multiply").addEventListener("click", () => calculate('*'));
document.getElementById("seven").addEventListener("click", () => calculate('7'));
document.getElementById("eight").addEventListener("click", () => calculate('8'));
document.getElementById("nine").addEventListener("click", () => calculate('9'));
document.getElementById("subtract").addEventListener("click", () => calculate('-'));
document.getElementById("four").addEventListener("click", () => calculate('4'));
document.getElementById("five").addEventListener("click", () => calculate('5'));
document.getElementById("six").addEventListener("click", () => calculate('6'));
document.getElementById("add").addEventListener("click", () => calculate('+'));
document.getElementById("one").addEventListener("click", () => calculate('1'));
document.getElementById("two").addEventListener("click", () => calculate('2'));
document.getElementById("three").addEventListener("click", () => calculate('3'));
document.getElementById("zero").addEventListener("click", () => calculate('0'));
document.getElementById("dot").addEventListener("click", () => calculate('.'));
document.getElementById("equals").addEventListener("click", () => calculate('='));

function calculate(value) {
    if (value === "=")
    {
      result.value = eval(result.value);
    }
    else
    {
        if(result.value.slice(-1) === '.' && value === '.')
        {
            return;
        }
        if(result.value.slice(-1) === '/' && value === '/')
        {
          return;
        }
        if(result.value.slice(-1) === '*' && value === '*')
        {
          return;
        }
        if(result.value.slice(-1) === '-' && value === '-')
        {
          return;
        }
        if(result.value.slice(-1) === '+' && value === '+')
        {
          return;
        }
        if(result.value.slice(-1) === '.' && (value === '.' || value === '/' || value === '*' || value === '-' || value === '+'))
        {
          return;
        }
        if(result.value.slice(-1) === '/' && (value === '.' || value === '/' || value === '*' || value === '-' || value === '+'))
        {
          return;
        }
        if(result.value.slice(-1) === '*' && (value === '.' || value === '/' || value === '*' || value === '-' || value === '+'))
        {
          return;
        }
        if(result.value.slice(-1) === '-' && (value === '.' || value === '/' || value === '*' || value === '-' || value === '+'))
        {
          return;
        }
        if(result.value.slice(-1) === '+' && (value === '.' || value === '/' || value === '*' || value === '-' || value === '+'))
        {
          return;
        }
        result.value += value;
    }
}

function clearResult()
{
  result.value = "";
}

function deleteLastChar()
{
  result.value = result.value.slice(0, -1);
}