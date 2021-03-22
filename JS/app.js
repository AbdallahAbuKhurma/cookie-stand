'use strict';

let workingHours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 am', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm', '08:00 pm'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Cookies(location, minCust, maxCust, avgCookiesPerCustomer, numOfCustomersPerHour, amountOfCookiesPerHour){
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.numOfCustomersPerHour = numOfCustomersPerHour;
    this.amountOfCookiesPerHour = amountOfCookiesPerHour;
    this.totalCookiesPerDay = 0;
  };
  
  Cookies.prototype.getCoustmerNumber = function(){
    for(let i = 0 ; i < workingHours.length ; i++){
      let randomFainal = getRandomNumber(this.minCust, this.maxCust);
      this.numOfCustomersPerHour.push(randomFainal);
    }
  };
  
  Cookies.prototype.caluAmountOfCookiesPerHour = function(){
    for (let i = 0; i < workingHours.length; i++) {
      const amountPerHoure = Math.floor(this.numOfCustomersPerHour[i] * this.avgCookiesPerCustomer);
      this.amountOfCookiesPerHour.push(amountPerHoure);
      this.totalCookiesPerDay = amountPerHoure + this.totalCookiesPerDay;
    }
  };
  
  let tableHeader = function () {
    const container = document.getElementById('sellingTable');
    const trEl = document.createElement('tr');
    let thEl = document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = 'Location';
  
    for (let i = 0 ; i < workingHours.length ; i++) {
      thEl = document.createElement('th');
      trEl.appendChild(thEl);
      thEl.textContent = workingHours[i];
    }
  
    thEl = document.createElement('th');
    thEl.textContent = 'Daily Total Cookies';
    trEl.appendChild(thEl);
    container.appendChild(trEl);
  };
  
  let totalPerHour = [];
  
  for (let i = 0; i < workingHours.length; i++) {
    totalPerHour.push(0);
  }
  
  Cookies.prototype.render = function () {
    const container = document.getElementById('sellingTable');
    const trEl = document.createElement('tr');
    let tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    container.appendChild(trEl);
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);
    for (let i = 0; i < workingHours.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.amountOfCookiesPerHour[i];
      trEl.appendChild(tdEl);
      totalPerHour[i] += this.amountOfCookiesPerHour[i];
    }
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay;
    trEl.appendChild(tdEl);
  };
  
  function calculateTotal() {
    let dailyTotal = 0;
    for (let i = 0; i < totalPerHour.length; i++) {
      dailyTotal += totalPerHour[i];
    }
    return dailyTotal;
  }
  
  let tableFooter = function () {
    const container = document.getElementById('sellingTable');
    const trEl = document.createElement('tr');
    let tdEl = document.createElement('td');
    tdEl.textContent = 'Totals';
    trEl.appendChild(tdEl);
    for (let i = 0; i < totalPerHour.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = totalPerHour[i];
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = calculateTotal();
    trEl.appendChild(tdEl);
    container.appendChild(trEl);
  };
  
  
  tableHeader();
  
  const seattle = new Cookies('Seattle', 23, 65, 6.3, [], []);
  seattle.getCoustmerNumber();
  seattle.caluAmountOfCookiesPerHour();
  seattle.render();
  
  const tokyo = new Cookies('Tokyo', 3, 24, 1.2, [], []);
  tokyo.getCoustmerNumber();
  tokyo.caluAmountOfCookiesPerHour();
  tokyo.render();
  
  const dubai = new Cookies('Dubai', 11, 38, 3.7, [], []);
  dubai.getCoustmerNumber();
  dubai.caluAmountOfCookiesPerHour();
  dubai.render();
  
  const paris = new Cookies('Paris', 20, 38, 2.3, [], []);
  paris.getCoustmerNumber();
  paris.caluAmountOfCookiesPerHour();
  paris.render();
  
  const lima = new Cookies('Lima', 2, 16, 4.6, [], []);
  lima.getCoustmerNumber();
  lima.caluAmountOfCookiesPerHour();
  lima.render();
  
  tableFooter();
  
  // the brevious solution for constructor //
  // Cookies.prototype.render = function(){
  //   const container = document.getElementById('section');
  //     const articleEl = document.createElement('article');
  //     container.appendChild(articleEl);
  //     const h2El = document.createElement('h2');
  //     articleEl.appendChild(h2El);
  //     h2El.textContent = this.location;
  
  //     const ulEl = document.createElement('ul');
  //     articleEl.appendChild(ulEl);
  //     for (let i = 0; i < workingHours.length; i++) {
  //       seattle.getCoustmerNumber(this.minCust, this.maxCust);
  //       const liEl = document.createElement('li');
  //       ulEl.appendChild(liEl);
  //       liEl.textContent = `${workingHours[i]}: ${this.amountOfCookiesPerHour[i]} cookies`;
  //     }
  //     const liEl = document.createElement('li');
  //     ulEl.appendChild(liEl);
  //     liEl.textContent = `Total : ${this.totalCookiesPerDay} cookies`;
  // }

// const seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesPerCustomer: 6.3,
//   numOfCustomersPerHour: [],
//   amountOfCookiesPerHour: [],
//   totalCookiesPerDay: 0,

//   getCoustmerNumber: function () {
//     for(let i = 0 ; i < workingHours.length ; i++){
//       let randomFainal = getRandomNumber(this.minCust, this.maxCust);
//       this.numOfCustomersPerHour.push(randomFainal);
//     }

//   },

//   caluAmountOfCookiesPerHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       const amountPerHoure = Math.floor(this.numOfCustomersPerHour[i] * this.avgCookiesPerCustomer);
//       this.amountOfCookiesPerHour.push(amountPerHoure);
//       this.totalCookiesPerDay = amountPerHoure + this.totalCookiesPerDay;
//     }
//   },
  
//   render: function () {
//     const container = document.getElementById('section');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.location;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < workingHours.length; i++) {
//       seattle.getCoustmerNumber(this.minCust, this.maxCust);
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${workingHours[i]}: ${this.amountOfCookiesPerHour[i]} cookies`;
//     }
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total : ${this.totalCookiesPerDay} cookies`;
//   }
// };

// seattle.getCoustmerNumber();
// seattle.caluAmountOfCookiesPerHour();
// seattle.render();

// const tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookiesPerCustomer: 1.2,
//   numOfCustomersPerHour: [],
//   amountOfCookiesPerHour: [],
//   totalCookiesPerDay: 0,

//   getCoustmerNumber: function () {
//     for(let i = 0 ; i < workingHours.length ; i++){
//       let randomFainal = getRandomNumber(this.minCust, this.maxCust);
//       this.numOfCustomersPerHour.push(randomFainal);
//     }

//   },

//   caluAmountOfCookiesPerHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       const amountPerHoure = Math.floor(this.numOfCustomersPerHour[i] * this.avgCookiesPerCustomer);
//       this.amountOfCookiesPerHour.push(amountPerHoure);
//       this.totalCookiesPerDay = amountPerHoure + this.totalCookiesPerDay;
//     }
//   },
  
//   render: function () {
//     const container = document.getElementById('section');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.location;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < workingHours.length; i++) {
//       tokyo.getCoustmerNumber(this.minCust, this.maxCust);
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${workingHours[i]}: ${this.amountOfCookiesPerHour[i]} cookies`;
//     }
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total : ${this.totalCookiesPerDay} cookies`;
//   }
// };

// tokyo.getCoustmerNumber();
// tokyo.caluAmountOfCookiesPerHour();
// tokyo.render();

// const dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesPerCustomer: 3.7,
//   numOfCustomersPerHour: [],
//   amountOfCookiesPerHour: [],
//   totalCookiesPerDay: 0,

//   getCoustmerNumber: function () {
//     for(let i = 0 ; i < workingHours.length ; i++){
//       let randomFainal = getRandomNumber(this.minCust, this.maxCust);
//       this.numOfCustomersPerHour.push(randomFainal);
//     }

//   },

//   caluAmountOfCookiesPerHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       const amountPerHoure = Math.floor(this.numOfCustomersPerHour[i] * this.avgCookiesPerCustomer);
//       this.amountOfCookiesPerHour.push(amountPerHoure);
//       this.totalCookiesPerDay = amountPerHoure + this.totalCookiesPerDay;
//     }
//   },
  
//   render: function () {
//     const container = document.getElementById('section');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.location;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < workingHours.length; i++) {
//       dubai.getCoustmerNumber(this.minCust, this.maxCust);
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${workingHours[i]}: ${this.amountOfCookiesPerHour[i]} cookies`;
//     }
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total : ${this.totalCookiesPerDay} cookies`;
//   }
// };

// dubai.getCoustmerNumber();
// dubai.caluAmountOfCookiesPerHour();
// dubai.render();

// const paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookiesPerCustomer: 2.3,
//   numOfCustomersPerHour: [],
//   amountOfCookiesPerHour: [],
//   totalCookiesPerDay: 0,

//   getCoustmerNumber: function () {
//     for(let i = 0 ; i < workingHours.length ; i++){
//       let randomFainal = getRandomNumber(this.minCust, this.maxCust);
//       this.numOfCustomersPerHour.push(randomFainal);
//     }

//   },

//   caluAmountOfCookiesPerHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       const amountPerHoure = Math.floor(this.numOfCustomersPerHour[i] * this.avgCookiesPerCustomer);
//       this.amountOfCookiesPerHour.push(amountPerHoure);
//       this.totalCookiesPerDay = amountPerHoure + this.totalCookiesPerDay;
//     }
//   },
  
//   render: function () {
//     const container = document.getElementById('section');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.location;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < workingHours.length; i++) {
//       paris.getCoustmerNumber(this.minCust, this.maxCust);
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${workingHours[i]}: ${this.amountOfCookiesPerHour[i]} cookies`;
//     }
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total : ${this.totalCookiesPerDay} cookies`;
//   }
// };

// paris.getCoustmerNumber();
// paris.caluAmountOfCookiesPerHour();
// paris.render();

// const lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesPerCustomer: 4.6,
//   numOfCustomersPerHour: [],
//   amountOfCookiesPerHour: [],
//   totalCookiesPerDay: 0,

//   getCoustmerNumber: function () {
//     for(let i = 0 ; i < workingHours.length ; i++){
//       let randomFainal = getRandomNumber(this.minCust, this.maxCust);
//       this.numOfCustomersPerHour.push(randomFainal);
//     }

//   },

//   caluAmountOfCookiesPerHour: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       const amountPerHoure = Math.floor(this.numOfCustomersPerHour[i] * this.avgCookiesPerCustomer);
//       this.amountOfCookiesPerHour.push(amountPerHoure);
//       this.totalCookiesPerDay = amountPerHoure + this.totalCookiesPerDay;
//     }
//   },
  
//   render: function () {
//     const container = document.getElementById('section');
//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.location;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < workingHours.length; i++) {
//       lima.getCoustmerNumber(this.minCust, this.maxCust);
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = `${workingHours[i]}: ${this.amountOfCookiesPerHour[i]} cookies`;
//     }
//     const liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent = `Total : ${this.totalCookiesPerDay} cookies`;
//   }
// };

// lima.getCoustmerNumber();
// lima.caluAmountOfCookiesPerHour();
// lima.render();

