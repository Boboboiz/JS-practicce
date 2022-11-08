function handleResult() {
  var math = document.getElementById("point1").value;
  var phys = document.getElementById("point2").value;
  var chem = document.getElementById("point3").value;
  var bonusArea = document.getElementById("pointArea").value;
  var bonusPrioriti = document.getElementById("pointPrioriti").value;
  var total = math + phys + chem + b1 + b2;
  var b1 = 0;
  var b2 = 0;
  var stdPoint = document.getElementById("standardPoint").value;
  var result = "";

  if (bonusArea === "A") {
    b1 = 2;
  } else if (bonusArea === "B") {
    b1 = 1;
  } else if (bonusArea === "C") {
    b1 = 0.5;
  } else if (bonusArea === "X") {
    b1 = 0;
  } else {
    alert("Nhập lại khu vực ");
  }

  if (bonusPrioriti === "1") {
    b2 = 2.5;
  } else if (bonusPrioriti === "2") {
    b2 = 1.5;
  } else if (bonusPrioriti === "3") {
    b2 = 1;
  } else if (bonusPrioriti === "0") {
    b2 = 0;
  } else {
    alert("Nhập đối tượng ưu tiên");
  }

  if (stdPoint <= total && math !== 0 && (phys !== 0) & (chem !== 0)) {
    result = "Pass";
  } else {
    result = " Fail";
  }

  document.getElementById("result").innerHTML = result;
}

// 2

function handleCal() {
  var amount = +document.getElementById("amount").value;
  var total = 0;

  if (amount <= 50) {
    total = amount * 500;
  } else if (amount <= 100) {
    total = 50 * 500 + (amount - 50) * 650;
  } else if (amount <= 200) {
    total = 50 * 500 + 50 * 650 + (amount - 100) * 850;
  } else if (amount <= 350) {
    total = 50 * 500 + 50 * 650 + 100 * 850 + (amount - 200) * 1100;
  } else if (amount > 350) {
    total =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (amount - 350) * 1300;
  }

  var totalPrice = "Tổng tiền là:" + total;
  document.getElementById("totalPrice").innerHTML = totalPrice;
}

//3
function handleCalTax() {
  var userName = document.getElementById("nameUser").value;
  var numberOfPeople = document.getElementById("numberOfDependPeople").value;
  var salary = +document.getElementById("totalSalary").value;
  var tax = 0;
  var totalTax = salary - 4 - numberOfPeople * 1.6;

  if (totalTax > 0 && totalTax <= 60) {
    tax = totalTax * (5 / 100);
  } else if (totalTax > 60 && totalTax <= 120) {
    tax = 60 * (5 / 100) + (totalTax - 60) * (10 / 100);
  } else if (totalTax > 0 && totalTax <= 210) {
    tax = 60 * (5 / 100) + 60 * (10 / 100) + (totalTax - 120) * (15 / 100);
  } else if (totalTax > 0 && totalTax <= 384) {
    tax =
      60 * (5 / 100) +
      60 * (10 / 100) +
      90 * (15 / 100) +
      (totalTax - 210) * (20 / 100);
  } else if (totalTax > 0 && totalTax <= 624) {
    tax =
      60 * (5 / 100) +
      60 * (10 / 100) +
      90 * (15 / 100) +
      174 * (20 / 100) +
      (totalTax - 384) * (25 / 100);
  } else if (totalTax > 0 && totalTax <= 960) {
    tax =
      60 * (5 / 100) +
      60 * (10 / 100) +
      90 * (15 / 100) +
      174 * (20 / 100) +
      240 * (25 / 100) +
      (totalTax - 624) * (30 / 100);
  } else if (totalTax > 960) {
    tax =
      60 * (5 / 100) +
      60 * (10 / 100) +
      90 * (15 / 100) +
      174 * (20 / 100) +
      240 * (25 / 100) +
      336 * (30 / 100) +
      (totalTax - 960) * (35 / 100);
  } else {
    alert("Lo đi làm đi nhé bro !!");
  }

  var result =
    "Tổng thuế thu nhập của ông/bà " + userName + " là:" + tax + " triệu";
  document.getElementById("tax").innerHTML = result;
}


// 4

function handleCalPrice (){
  
}