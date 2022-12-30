var erase = document.querySelector("#erase");
var clear = document.querySelector("#clear");
var equal = document.querySelector("#answer");

var btn_zero = document.querySelector("#zero");
var btn_one = document.querySelector("#one");
var btn_two = document.querySelector("#two");
var btn_three = document.querySelector("#three");
var btn_four = document.querySelector("#four");
var btn_five = document.querySelector("#five");
var btn_six = document.querySelector("#six");
var btn_seven = document.querySelector("#seven");
var btn_eight = document.querySelector("#eight");
var btn_nine = document.querySelector("#nine");

var btn_plus = document.querySelector("#plus");
var btn_minus = document.querySelector("#minus");
var btn_multiply = document.querySelector("#multiply");
var btn_divide = document.querySelector("#divide");
var btn_point = document.querySelector("#point");
var btn_percentage = document.querySelector("#percentage");

var numbers = document.querySelector("#numbers");
var result = document.querySelector("#result");

btn_zero.onclick = () => {
  type_to(0);
};

btn_one.onclick = () => {
  type_to(1);
};

btn_two.onclick = () => {
  type_to(2);
};

btn_three.onclick = () => {
  type_to(3);
};

btn_four.onclick = () => {
  type_to(4);
};

btn_five.onclick = () => {
  type_to(5);
};

btn_six.onclick = () => {
  type_to(6);
};

btn_seven.onclick = () => {
  type_to(7);
};

btn_eight.onclick = () => {
  type_to(8);
};

btn_nine.onclick = () => {
  type_to(9);
};

btn_plus.onclick = () => {
  type_to("+");
};

btn_minus.onclick = () => {
  type_to("-");
};

btn_multiply.onclick = () => {
  type_to("*");
};

btn_divide.onclick = () => {
  type_to("/");
};

btn_point.onclick = () => {
  type_to(".");
};

btn_percentage.onclick = () => {
  type_to("%");
};

document.onkeyup = (e) => {
  if (e.key == "0" || e.key == "Num0") {
    type_to(0);
  } else if (e.key == "1" || e.key == "Num1") {
    type_to(1);
  } else if (e.key == "2" || e.key == "Num2") {
    type_to(2);
  } else if (e.key == "3" || e.key == "Num3") {
    type_to(3);
  } else if (e.key == "4" || e.key == "Num4") {
    type_to(4);
  } else if (e.key == "5" || e.key == "Num5") {
    type_to(5);
  } else if (e.key == "6" || e.key == "Num6") {
    type_to(6);
  } else if (e.key == "7" || e.key == "Num7") {
    type_to(7);
  } else if (e.key == "8" || e.key == "Num8") {
    type_to(8);
  } else if (e.key == "9" || e.key == "Num9") {
    type_to(9);
  } else if (e.key == "+" || e.key == "Num+") {
    type_to("+");
  } else if (e.key == "-" || e.key == "Num-") {
    type_to("-");
  } else if (e.key == "*" || e.key == "Num*") {
    type_to("*");
  } else if (e.key == "/" || e.key == "Num/") {
    type_to("/");
  } else if (e.key == "%" || e.key == "Num%") {
    type_to("%");
  } else if (e.key == "." || e.key == "Num.") {
    type_to(".");
  }
};

var type_to = (text) => {
  if (numbers.innerText == "") {
    numbers.innerText = text;
  } else if (numbers.innerText.length <= 13) {
    numbers.innerText = numbers.innerText + text;
  } else {
    numbers.textContent = "Digit limit reached";
  }
};
