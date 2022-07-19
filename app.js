'use strict';

let salesSection = document.getElementById('sales');
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattle = {
  name: 'seattle',
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

let tokyo = {
  name: 'tokyo',
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
};let paris = {
  name: 'paris',
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
};let dubai = {
  name: 'dubai',
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
};let lima = {
  name: 'lima',
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

function randNumCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let storeArray = [seattle,tokyo,paris,dubai,lima];
// for loop to render all shop data.
for (let i = 0; i < storeArray.length; i++){
  storeArray[i].render();
  //  after you create stores, dot push into array
  // console.log(storeArray[i].render());
}
