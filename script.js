var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", "Optical", 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Blah Blah", "Primary Care", 770);

var claim6 = new Claim("What What", "Primary Care", 770);

var claim7 = new Claim("Yada Yada", "Primary Care", 770);

var claim8 = new Claim("Luke Skywalker", "Primary Care", 770);

var claim9 = new Claim("Han Solo", "Primary Care", 770);

var claim10 = new Claim("Chewbacca", "Primary Care", 770);

var initialList = [claim1, claim2, claim3, claim4, claim5];

var newList = [claim6, claim7, claim8, claim9, claim10];

var totalList = initialList.concat(newList);

var totalPayedOut = 0;

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered
function percentCalc(claim){
  var temp = 0;
  var tempClaim = claim.visitType.toLowerCase();

  switch(tempClaim){
    case 'optical':
    temp = 0;
    break;
    case 'specialist':
    temp = 10;
    break;
    case 'emergency':
    temp = 100;
    break;
    case 'primary care':
    temp = 50;
    break;
  }
  return temp;
}
//function to determine amount covered
function amountCalc(claim, percent, totalPayedOut){
  var tempAmount = claim.visitCost * (percent/100);
  totalPayedOut += tempAmount;
  return tempAmount.toLocaleString('en-us', {style: 'currency', currency: 'USD'});
}

for(var i = 0; i < totalList.length; i++){
  var percent = 0;
  var payed = 0;
  percent = percentCalc(totalList[i]);
  payed = amountCalc(totalList[i], percent, totalPayedOut);
  console.log(payed + " for " + totalList[i].patientName);
}
console.log("Total payed out: " + totalPayedOut);
