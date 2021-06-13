'use strict';


let salmonCookies = document.getElementById('salmonCookies');


// first shop
let seattleShop = {
    region: 'Seattle',
    Min: '23',
    Max: '65',
    AvgCookie: '6.3',
    totalCookiesSold: [],
    Total: 0,
    workHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    getNumberOfCookies: function() {
        let workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        let sum = 0;
        for (let i = 0; i < workHours.length; i++) {
            let numOfCustomers = getRandomNumber(this.Min, this.Max);
            let soldCookies = Math.ceil(numOfCustomers * this.AvgCookie);
            this.totalCookiesSold[i] = soldCookies;
            sum = sum + this.totalCookiesSold[i];
            this.Total = sum;
        }

    },
    render: function() {
        // Create a new Element
        // add a text to the new element
        // append the child to the parent
        let shopName = document.createElement('p');
        salmonCookies.appendChild(shopName);
        shopName.textContent = `${this.region}`;

        let hourList = document.createElement('ul');
        salmonCookies.appendChild(hourList);
        for (let i = 0; i < this.workHours.length; i++) {
            let listItem = document.createElement('li');
            hourList.appendChild(listItem);
            listItem.textContent = `${this.workHours[i]}: ${this.totalCookiesSold[i]} cookies`;
        }
        let listItem = document.createElement('li');
        hourList.appendChild(listItem);
        listItem.textContent = `Total: ${this.Total} cookies`;
    }
};
seattleShop.getNumberOfCookies();
seattleShop.render();
console.log(seattleShop);
//second shop
let tokyoShop = {
    region: 'Tokyo',
    Min: '3',
    Max: '24',
    AvgCookie: '1.2',
    totalCookiesSold: [],
    workHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    getNumberOfCookies: function() {
        let workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        let sum = 0;
        for (let i = 0; i < workHours.length; i++) {
            let numOfCustomers = getRandomNumber(this.Min, this.Max);
            let soldCookies = Math.ceil(numOfCustomers * this.AvgCookie);
            this.totalCookiesSold[i] = soldCookies;
            sum = sum + this.totalCookiesSold[i];
            this.Total = sum;
        }
    },
    render: function() {
        // Create a new Element
        // add a text to the new element
        // append the child to the parent
        let shopName = document.createElement('p');
        salmonCookies.appendChild(shopName);
        shopName.textContent = `${this.region}`;

        let hourList = document.createElement('ul');
        salmonCookies.appendChild(hourList);

        for (let i = 0; i < this.workHours.length; i++) {
            let listItem = document.createElement('li');
            hourList.appendChild(listItem);
            listItem.textContent = `${this.workHours[i]}: ${this.totalCookiesSold[i]} cookies`;
        }
        let listItem = document.createElement('li');
        hourList.appendChild(listItem);
        listItem.textContent = `Total: ${this.Total} cookies`;
    }
};
tokyoShop.getNumberOfCookies();
tokyoShop.render();

// //third shop
let dubaiShop = {
    region: 'Dubai',
    Min: '11',
    Max: '38',
    AvgCookie: '3.7',
    totalCookiesSold: [],
    workHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    getNumberOfCookies: function() {
        let workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        let sum = 0;
        for (let i = 0; i < workHours.length; i++) {
            let numOfCustomers = getRandomNumber(this.Min, this.Max);
            let soldCookies = Math.ceil(numOfCustomers * this.AvgCookie);
            this.totalCookiesSold[i] = soldCookies;
            sum = sum + this.totalCookiesSold[i];
            this.Total = sum;
        }

    },
    render: function() {
        // Create a new Element
        // add a text to the new element
        // append the child to the parent
        let shopName = document.createElement('p');
        salmonCookies.appendChild(shopName);
        shopName.textContent = `${this.region}`;

        let hourList = document.createElement('ul');
        salmonCookies.appendChild(hourList);

        for (let i = 0; i < this.workHours.length; i++) {
            let listItem = document.createElement('li');
            hourList.appendChild(listItem);
            listItem.textContent = `${this.workHours[i]}: ${this.totalCookiesSold[i]} cookies`;
        }
        let listItem = document.createElement('li');
        hourList.appendChild(listItem);
        listItem.textContent = `Total: ${this.Total} cookies`;
    }
};
dubaiShop.getNumberOfCookies();
dubaiShop.render();

// //fourth shop
let parisShop = {
    region: 'Paris',
    Min: '20',
    Max: '38',
    AvgCookie: '2.3',
    totalCookiesSold: [],
    workHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    getNumberOfCookies: function() {
        let workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        let sum = 0;
        for (let i = 0; i < workHours.length; i++) {
            let numOfCustomers = getRandomNumber(this.Min, this.Max);
            let soldCookies = Math.ceil(numOfCustomers * this.AvgCookie);
            this.totalCookiesSold[i] = soldCookies;
            sum = sum + this.totalCookiesSold[i];
            this.Total = sum;
        }

    },
    render: function() {
        // Create a new Element
        // add a text to the new element
        // append the child to the parent
        let shopName = document.createElement('p');
        salmonCookies.appendChild(shopName);
        shopName.textContent = `${this.region}`;

        let hourList = document.createElement('ul');
        salmonCookies.appendChild(hourList);

        for (let i = 0; i < this.workHours.length; i++) {
            let listItem = document.createElement('li');
            hourList.appendChild(listItem);
            listItem.textContent = `${this.workHours[i]}: ${this.totalCookiesSold[i]} cookies`;
        }
        let listItem = document.createElement('li');
        hourList.appendChild(listItem);
        listItem.textContent = `Total: ${this.Total} cookies`;
    }
};
parisShop.getNumberOfCookies();
parisShop.render();
//fifith shop
let limaShop = {
    region: 'Lima',
    Min: '2',
    Max: '16',
    AvgCookie: '4.6',
    totalCookiesSold: [],
    workHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    getNumberOfCookies: function() {
        let workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
        let sum = 0;
        for (let i = 0; i < workHours.length; i++) {
            let numOfCustomers = getRandomNumber(this.Min, this.Max);
            let soldCookies = Math.ceil(numOfCustomers * this.AvgCookie);
            this.totalCookiesSold[i] = soldCookies;
            sum = sum + this.totalCookiesSold[i];
            this.Total = sum;
        }

    },
    render: function() {
        // Create a new Element
        // add a text to the new element
        // append the child to the parent
        let shopName = document.createElement('p');
        salmonCookies.appendChild(shopName);
        shopName.textContent = `${this.region}`;

        let hourList = document.createElement('ul');
        salmonCookies.appendChild(hourList);

        for (let i = 0; i < this.workHours.length; i++) {
            let listItem = document.createElement('li');
            hourList.appendChild(listItem);
            listItem.textContent = `${this.workHours[i]}: ${this.totalCookiesSold[i]} cookies`;
        }
        let listItem = document.createElement('li');
        hourList.appendChild(listItem);
        listItem.textContent = `Total: ${this.Total} cookies\n\n`;
    }
};
limaShop.getNumberOfCookies();
limaShop.render();




//The random number function:
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//end