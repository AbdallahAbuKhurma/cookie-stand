'use strict';

let workingHours = ['06:00 am', '07:00 am', '08:00 am', '09:00 am', '10:00 am', '11:00 am', '12:00 am', '01:00 pm', '02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm', '08:00 pm'];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCustomer: 6.3,
  numOfCustomersPerHour: [],
  amountOfCookiesPerHour: [],
  totalCookiesPerDay: 0,

  getCoustmerNumber: function () {
    for(let i = 0 ; i < workingHours.length ; i++){
      let randomFainal = getRandomNumber(this.minCust, this.maxCust);
      this.numOfCustomersPerHour.push(randomFainal);
    }

  },

  caluAmountOfCookiesPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      const amountPerHoure = Math.floor(this.numOfCustomersPerHour[i] * this.avgCookiesPerCustomer);
      this.amountOfCookiesPerHour.push(amountPerHoure);
      this.totalCookiesPerDay = amountPerHoure + this.totalCookiesPerDay;
    }
  },
  
  render: function () {
    const container = document.getElementById('section');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < workingHours.length; i++) {
      seattle.getCoustmerNumber(this.minCust, this.maxCust);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${workingHours[i]}: ${this.amountOfCookiesPerHour[i]} cookies`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.totalCookiesPerDay} cookies`;
  }
};

seattle.getCoustmerNumber();
seattle.caluAmountOfCookiesPerHour();
seattle.render();

const tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookiesPerCustomer: 1.2,
  numOfCustomersPerHour: [],
  amountOfCookiesPerHour: [],
  totalCookiesPerDay: 0,

  getCoustmerNumber: function () {
    for(let i = 0 ; i < workingHours.length ; i++){
      let randomFainal = getRandomNumber(this.minCust, this.maxCust);
      this.numOfCustomersPerHour.push(randomFainal);
    }

  },

  caluAmountOfCookiesPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      const amountPerHoure = Math.floor(this.numOfCustomersPerHour[i] * this.avgCookiesPerCustomer);
      this.amountOfCookiesPerHour.push(amountPerHoure);
      this.totalCookiesPerDay = amountPerHoure + this.totalCookiesPerDay;
    }
  },
  
  render: function () {
    const container = document.getElementById('section');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < workingHours.length; i++) {
      tokyo.getCoustmerNumber(this.minCust, this.maxCust);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${workingHours[i]}: ${this.amountOfCookiesPerHour[i]} cookies`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.totalCookiesPerDay} cookies`;
  }
};

tokyo.getCoustmerNumber();
tokyo.caluAmountOfCookiesPerHour();
tokyo.render();

const dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookiesPerCustomer: 3.7,
  numOfCustomersPerHour: [],
  amountOfCookiesPerHour: [],
  totalCookiesPerDay: 0,

  getCoustmerNumber: function () {
    for(let i = 0 ; i < workingHours.length ; i++){
      let randomFainal = getRandomNumber(this.minCust, this.maxCust);
      this.numOfCustomersPerHour.push(randomFainal);
    }

  },

  caluAmountOfCookiesPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      const amountPerHoure = Math.floor(this.numOfCustomersPerHour[i] * this.avgCookiesPerCustomer);
      this.amountOfCookiesPerHour.push(amountPerHoure);
      this.totalCookiesPerDay = amountPerHoure + this.totalCookiesPerDay;
    }
  },
  
  render: function () {
    const container = document.getElementById('section');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < workingHours.length; i++) {
      dubai.getCoustmerNumber(this.minCust, this.maxCust);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${workingHours[i]}: ${this.amountOfCookiesPerHour[i]} cookies`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.totalCookiesPerDay} cookies`;
  }
};

dubai.getCoustmerNumber();
dubai.caluAmountOfCookiesPerHour();
dubai.render();

const paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookiesPerCustomer: 2.3,
  numOfCustomersPerHour: [],
  amountOfCookiesPerHour: [],
  totalCookiesPerDay: 0,

  getCoustmerNumber: function () {
    for(let i = 0 ; i < workingHours.length ; i++){
      let randomFainal = getRandomNumber(this.minCust, this.maxCust);
      this.numOfCustomersPerHour.push(randomFainal);
    }

  },

  caluAmountOfCookiesPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      const amountPerHoure = Math.floor(this.numOfCustomersPerHour[i] * this.avgCookiesPerCustomer);
      this.amountOfCookiesPerHour.push(amountPerHoure);
      this.totalCookiesPerDay = amountPerHoure + this.totalCookiesPerDay;
    }
  },
  
  render: function () {
    const container = document.getElementById('section');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < workingHours.length; i++) {
      paris.getCoustmerNumber(this.minCust, this.maxCust);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${workingHours[i]}: ${this.amountOfCookiesPerHour[i]} cookies`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.totalCookiesPerDay} cookies`;
  }
};

paris.getCoustmerNumber();
paris.caluAmountOfCookiesPerHour();
paris.render();

const lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookiesPerCustomer: 4.6,
  numOfCustomersPerHour: [],
  amountOfCookiesPerHour: [],
  totalCookiesPerDay: 0,

  getCoustmerNumber: function () {
    for(let i = 0 ; i < workingHours.length ; i++){
      let randomFainal = getRandomNumber(this.minCust, this.maxCust);
      this.numOfCustomersPerHour.push(randomFainal);
    }

  },

  caluAmountOfCookiesPerHour: function () {
    for (let i = 0; i < workingHours.length; i++) {
      const amountPerHoure = Math.floor(this.numOfCustomersPerHour[i] * this.avgCookiesPerCustomer);
      this.amountOfCookiesPerHour.push(amountPerHoure);
      this.totalCookiesPerDay = amountPerHoure + this.totalCookiesPerDay;
    }
  },
  
  render: function () {
    const container = document.getElementById('section');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < workingHours.length; i++) {
      lima.getCoustmerNumber(this.minCust, this.maxCust);
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${workingHours[i]}: ${this.amountOfCookiesPerHour[i]} cookies`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.totalCookiesPerDay} cookies`;
  }
};

lima.getCoustmerNumber();
lima.caluAmountOfCookiesPerHour();
lima.render();

