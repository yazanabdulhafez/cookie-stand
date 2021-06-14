'use strict';
let workHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let sum = [];
let totalSum = 0;
/////Render function for header of the table
let salmonCookies = document.getElementById('salmonCookies');
let salesTable = document.createElement('table');
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



function CookiesShop(region, Min, Max, AvgCookie) {
    this.region = region;
    this.Min = Min;
    this.Max = Max;
    this.AvgCookie = AvgCookie;
    this.totalCookiesSold = [];
    this.Total = 0;
}

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
/////////////////////make a new objects
let seattleShop = new CookiesShop('Seattle', '23', '65', '6.3');
let tokyoShop = new CookiesShop('Tokyo', '3', '24', '1.2');
let dubaiShop = new CookiesShop('Dubai', '11', '38', '3.7');
let parisShop = new CookiesShop('Paris', '20', '38', '2.3');
let limaShop = new CookiesShop('Lima', '2', '16', '4.6');
////////////////////

headerRender();
seattleShop.getNumberOfCookies();
let mat1 = seattleShop.totalCookiesSold;
//console.log(mat1);
seattleShop.render();
/////////////////
tokyoShop.getNumberOfCookies();
let mat2 = tokyoShop.totalCookiesSold;
//console.log(mat2);
tokyoShop.render();
/////////////////
dubaiShop.getNumberOfCookies();
let mat3 = dubaiShop.totalCookiesSold;
//console.log(mat3);
dubaiShop.render();
/////////////////
parisShop.getNumberOfCookies();
let mat4 = parisShop.totalCookiesSold;
//console.log(mat4);
parisShop.render();
/////////////////
limaShop.getNumberOfCookies();
let mat5 = limaShop.totalCookiesSold;
//console.log(mat5);
///////////////the total sum for each column from the table
limaShop.render();
for (let i = 0; i < workHours.length; i++) {
    sum[i] = mat1[i] + mat2[i] + mat3[i] + mat4[i] + mat5[i];
    totalSum += Number(sum[i]);
}
footerRender();
//console.log(sum);
//console.log(totalSum);

/////////////////////////the footer of table render function
function footerRender() {
    let theFooterPart = document.createElement('tfoot');
    salesTable.appendChild(theFooterPart);

    let footerRow = document.createElement('tr');
    theFooterPart.appendChild(footerRow);

    let firstElement = document.createElement('th');
    footerRow.appendChild(firstElement);
    firstElement.textContent = 'Totals';
    for (let i = 0; i < workHours.length; i++) {
        let tableHederElement = document.createElement('th');
        footerRow.appendChild(tableHederElement);
        tableHederElement.textContent = sum[i];
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
//////////////////////////////////end