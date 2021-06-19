'use strict';
let workHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
CookiesShop.allCookies = [];
/////Render function for header of the table
let salmonCookies = document.getElementById('salmonCookies');
let shopForm = document.getElementById('shopForm');

let salesTable = document.getElementById('table');
salmonCookies.appendChild(salesTable);

let theHeaderPart = document.createElement('thead');
salesTable.appendChild(theHeaderPart);

function headerRender() {
  let headeRow = document.createElement('tr');
  theHeaderPart.appendChild(headeRow);

  let thBlank = document.createElement('th');
  headeRow.appendChild(thBlank);
  thBlank.textContent = 'Time & location';

  for (let i = 0; i < workHours.length; i++) {
    let tableHederElement = document.createElement('th');
    headeRow.appendChild(tableHederElement);
    tableHederElement.textContent = workHours[i];
  }
  let finalHeader = document.createElement('th');
  headeRow.appendChild(finalHeader);
  finalHeader.textContent = 'Daily Location Total ';
}

//////////////////////constructor function


function CookiesShop(region, Min, Max, AvgCookie) {
  this.region = region;
  this.Min = Min;
  this.Max = Max;
  this.AvgCookie = AvgCookie;
  this.totalCookiesSold = [];
  this.Total = 0;
  CookiesShop.allCookies.push(this);

}

////////////////////////////////////////////get the number of cookies per hour
CookiesShop.prototype.getNumberOfCookies = function() {
  for (let i = 0; i < workHours.length; i++) {
    let numOfCustomers = getRandomNumber(this.Min, this.Max);
    let soldCookies = Math.ceil(numOfCustomers * this.AvgCookie);
    this.totalCookiesSold.push(soldCookies);
    this.Total += this.totalCookiesSold[i];
  }
};
//////////////the body of the table
CookiesShop.prototype.render = function() {
  let theBodyPart = document.createElement('tbody');
  salesTable.appendChild(theBodyPart);

  let bodyRow = document.createElement('tr');
  theBodyPart.appendChild(bodyRow);


  let firstElement = document.createElement('td');
  bodyRow.appendChild(firstElement);
  firstElement.textContent = this.region;

  for (let i = 0; i < workHours.length; i++) {
    let firstElement = document.createElement('td');
    bodyRow.appendChild(firstElement);
    firstElement.textContent = this.totalCookiesSold[i];
  }
  let lastElement = document.createElement('td');
  bodyRow.appendChild(lastElement);
  lastElement.textContent = this.Total;
};

///////////////////////delete the last row when ever we add new shop
CookiesShop.prototype.myDeleteFunction = function() {
  document.getElementById('table').deleteRow(CookiesShop.allCookies.length--);
};







/////////////////////make a new objects
let seattleShop = new CookiesShop('Seattle', '23', '65', '6.3');
let tokyoShop = new CookiesShop('Tokyo', '3', '24', '1.2');
let dubaiShop = new CookiesShop('Dubai', '11', '38', '3.7');
let parisShop = new CookiesShop('Paris', '20', '38', '2.3');
let limaShop = new CookiesShop('Lima', '2', '16', '4.6');
////////////////////

headerRender();
seattleShop.getNumberOfCookies();
seattleShop.render();
/////////////////
tokyoShop.getNumberOfCookies();
tokyoShop.render();
/////////////////
dubaiShop.getNumberOfCookies();
dubaiShop.render();
/////////////////
parisShop.getNumberOfCookies();
parisShop.render();
/////////////////
limaShop.getNumberOfCookies();
limaShop.render();

footerRender();

/////////////////////////the render function of the table footer:
function footerRender() {
  let theFooterPart = document.createElement('tfoot');
  salesTable.appendChild(theFooterPart);

  let footerRow = document.createElement('tr');
  theFooterPart.appendChild(footerRow);

  let firstElement = document.createElement('th');
  footerRow.appendChild(firstElement);
  firstElement.textContent = 'Totals';
  let sum = [];
  let totalSum = 0;
  for (let i = 0; i < workHours.length; i++) {
    sum = 0;
    for (let j = 0; j < CookiesShop.allCookies.length; j++) {
      //console.log(CookiesShop.allCookies[j].totalCookiesSold[i]);
      let Total = CookiesShop.allCookies[j].totalCookiesSold[i];
      // console.log(Total);
      sum += Total;
      totalSum += Total;
      // console.log(totalSum);
    }
    let tableHederElement = document.createElement('th');
    footerRow.appendChild(tableHederElement);
    tableHederElement.textContent = sum;
  }
  let finalElement = document.createElement('th');
  footerRow.appendChild(finalElement);
  finalElement.textContent = totalSum;
}
////////////////////////The random number function:
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
/////////////////form function//////////////////////////////
function formSubmission(event) {
  event.preventDefault();
  let region = event.target.shopRegion.value;
  let Min = event.target.MinValue.value;
  let Max = event.target.MaxValue.value;
  let AvgCookie = event.target.AvgValue.value;
  let newShop = new CookiesShop(region, Min, Max, AvgCookie);
  CookiesShop.allCookies.push(newShop);
  console.log(CookiesShop.allCookies);

  newShop.getNumberOfCookies();
  newShop.render();
  newShop.myDeleteFunction();
  footerRender();

}

shopForm.addEventListener('submit', formSubmission);

//////END///////