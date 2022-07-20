'use strict';

let salesSection = document.getElementById('sales');
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function randNumCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let storeName =  [];

function StoreName(name,minCust,maxCust,avgCookie,){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.customerEachHour = this.customerEachHour;
  this.cookieSoldPerHour = this.cookieSoldPerHour;

  storeName.push(this);
}

StoreName.prototype.calcPeoplePerHour = function(){
  for (let i = 0; i < hours.length; i++){
    this.customerEachHour.push(randNumCust(this.minCust,this.maxCust));
  }
}

let articleElem = document.createElement('article');
store


let seattle = new StoreName('Seattle',)

// // prototypes 
// Store.prototype.
// for(let i = 0; i < store.length; i)

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  customerEachHour: [],
  cookieSoldPerHour: [],
  totalCookieSold: 0,
  calcPeoplePerHour: function(){
    for (let i = 0; i < hours.length; i++){
      this.customerEachHour.push(randNumCust(this.minCust,this.maxCust));
    }
  },

  salesPerHour: function(){
    for (let i = 0; i < hours.length; i++){
      let customers = randNumCust(this.minCust,this.maxCust)
      let cookiesSold = Math.round(customers*this.avgCookie)
      this.cookieSoldPerHour.push(cookiesSold);
      this.totalCookieSold += cookiesSold
    }
  },

  render: function(){
    this.salesPerHour();
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}`;
    articleElem.appendChild(h2Elem);

    for (let i = 0; i < hours.length; i++){
      const li = document.createElement('li');
      li.textContent = `${hours[i]} ${this.cookieSoldPerHour[i]}`;
      articleElem.appendChild(li);

      // let pElem = document.createElement('p');
      // pElem.textContent = `${this.customer}`;
      // articleElem.appendChild(pElem);
      // let ulElem = document.createElement('ul');
      // articleElem.appendChild(ulElem);
    }
  },
};

let tokyo = {
  name: 'Tokyo',
  customerEachHour: [],
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookieSoldPerHour: [],
  totalCookieSold: 0,
  calcPeoplePerHour: function(){
    for (let i = 0; i < hours.length; i++){
      this.customerEachHour.push(randNumCust(this.minCust,this.maxCust));
    }
  },

  salesPerHour: function(){
    for (let i = 0; i < hours.length; i++){
      let customers = randNumCust(this.minCust,this.maxCust)
      let cookiesSold = Math.round(customers*this.avgCookie)
      this.cookieSoldPerHour.push(cookiesSold);
      this.totalCookieSold += cookiesSold
    }
  },

  render: function(){
    this.salesPerHour();
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}`;
    articleElem.appendChild(h2Elem);

    for (let i = 0; i < hours.length; i++){
      const li = document.createElement('li');
      li.textContent = `${hours[i]} ${this.cookieSoldPerHour[i]}`;
      articleElem.appendChild(li);

      // let pElem = document.createElement('p');
      // pElem.textContent = `${this.customer}`;
      // articleElem.appendChild(pElem);
      // let ulElem = document.createElement('ul');
      // articleElem.appendChild(ulElem);
    }
  },
};

let paris = {
  name: 'Paris',
  customerEachHour: [],
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookieSoldPerHour: [],
  totalCookieSold: 0,
  calcPeoplePerHour: function(){
    for (let i = 0; i < hours.length; i++){
      this.customerEachHour.push(randNumCust(this.minCust,this.maxCust));
    }
  },

  salesPerHour: function(){
    for (let i = 0; i < hours.length; i++){
      let customers = randNumCust(this.minCust,this.maxCust)
      let cookiesSold = Math.round(customers*this.avgCookie)
      this.cookieSoldPerHour.push(cookiesSold);
      this.totalCookieSold += cookiesSold
    }
  },

  render: function(){
    this.salesPerHour();
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}`;
    articleElem.appendChild(h2Elem);

    for (let i = 0; i < hours.length; i++){
      const li = document.createElement('li');
      li.textContent = `${hours[i]} ${this.cookieSoldPerHour[i]}`;
      articleElem.appendChild(li);

      // let pElem = document.createElement('p');
      // pElem.textContent = `${this.customer}`;
      // articleElem.appendChild(pElem);
      // let ulElem = document.createElement('ul');
      // articleElem.appendChild(ulElem);
    }
  },
};

let dubai = {
  name: 'Dubai',
  customerEachHour: [],
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookieSoldPerHour: [],
  totalCookieSold: 0,
  calcPeoplePerHour: function(){
    for (let i = 0; i < hours.length; i++){
      this.customerEachHour.push(randNumCust(this.minCust,this.maxCust));
    }
  },

  salesPerHour: function(){
    for (let i = 0; i < hours.length; i++){
      let customers = randNumCust(this.minCust,this.maxCust)
      let cookiesSold = Math.round(customers*this.avgCookie)
      this.cookieSoldPerHour.push(cookiesSold);
      this.totalCookieSold += cookiesSold
    }
  },

  render: function(){
    this.salesPerHour();
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}`;
    articleElem.appendChild(h2Elem);

    for (let i = 0; i < hours.length; i++){
      const li = document.createElement('li');
      li.textContent = `${hours[i]} ${this.cookieSoldPerHour[i]}`;
      articleElem.appendChild(li);

      // let pElem = document.createElement('p');
      // pElem.textContent = `${this.customer}`;
      // articleElem.appendChild(pElem);
      // let ulElem = document.createElement('ul');
      // articleElem.appendChild(ulElem);
    }
  },
};

let lima = {
  name: 'Lima',
  customerEachHour: [],
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookieSoldPerHour: [],
  totalCookieSold: 0,
  calcPeoplePerHour: function(){
    for (let i = 0; i < hours.length; i++){
      this.customerEachHour.push(randNumCust(this.minCust,this.maxCust));
    }
  },

  salesPerHour: function(){
    for (let i = 0; i < hours.length; i++){
      let customers = randNumCust(this.minCust,this.maxCust)
      let cookiesSold = Math.round(customers*this.avgCookie)
      this.cookieSoldPerHour.push(cookiesSold);
      this.totalCookieSold += cookiesSold
    }
  },

  render: function(){
    this.salesPerHour();
    let articleElem = document.createElement('article');
    salesSection.appendChild(articleElem);
    let h2Elem = document.createElement('h2');
    h2Elem.textContent = `${this.name}`;
    articleElem.appendChild(h2Elem);

    for (let i = 0; i < hours.length; i++){
      const li = document.createElement('li');
      li.textContent = `${hours[i]} ${this.cookieSoldPerHour[i]}`;
      articleElem.appendChild(li);

      // let pElem = document.createElement('p');
      // pElem.textContent = `${this.customer}`;
      // articleElem.appendChild(pElem);
      // let ulElem = document.createElement('ul');
      // articleElem.appendChild(ulElem);
    }
  },
};


let storeArray = [seattle,tokyo,paris,dubai,lima];
// for loop to render all shop data.
for (let i = 0; i < storeArray.length; i++){
  storeArray[i].render();
  //  after you create stores, dot push into array
  // console.log(storeArray[i].render());
}