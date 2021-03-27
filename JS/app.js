'use strict';

let workingHours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 am', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm', '08:00 pm'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function Cookies(location, minCust, maxCust, avgCookiesPerCustomer, numOfCustomersPerHour, amountOfCookiesPerHour) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.numOfCustomersPerHour = [];
  this.amountOfCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
};

Cookies.prototype.getCoustmerNumber = function () {
  for (let i = 0; i < workingHours.length; i++) {
    let randomFainal = getRandomNumber(this.minCust, this.maxCust);
    this.numOfCustomersPerHour.push(randomFainal);
  }
};

Cookies.prototype.caluAmountOfCookiesPerHour = function () {
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

  for (let i = 0; i < workingHours.length; i++) {
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
  trEl.setAttribute('id','trFooter');
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


let cookieForm = document.getElementById('salamonForm');

cookieForm.addEventListener('submit', addNewBranch);

function addNewBranch(event) {
  event.preventDefault();
  let location = event.target.Location.value;
  let minCust = Number(event.target.minorder.value);
  let maxCust = Number(event.target.maxorder.value);
  let avgCookiesPerCustomer = Number(event.target.avgsales.value);

  let AddStore = new Cookies(location, minCust, maxCust, avgCookiesPerCustomer);
  AddStore.getCoustmerNumber();
  AddStore.caluAmountOfCookiesPerHour();
  AddStore.render();
  
  let tb = document.getElementById('sellingTable');
  let tbFooter = document.getElementById('trFooter');
  tb.removeChild(tbFooter);
  tableFooter();

  cookieForm.reset();
}

