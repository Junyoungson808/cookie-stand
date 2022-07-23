'use strict';

let salesSection = document.getElementById('sales');
let tableFoot = document.getElementById('tfoot');
let hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Store Daily Total'];
let storeName = [];

// STEP 1 GRAB THE ELEMENT I WANT TO LISTEN TO
let myForm = document.getElementById('my-form');

// STEP 3 DEFINTE OUR CALLBACK FUNCTION OR EVENT HANDLER
function handleClick(event){
  event.preventDefault();
  console.log(event);
  let name = event.target.newStoreName.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let averageCookie = parseFloat(event.target.averageCookie.value);
  console.log(name,minCust,maxCust,averageCookie);

  let newStoreName = new StoreName(name,minCust,maxCust,averageCookie);
  newStoreName.render();
  // console.log(newStoreName);
  tableFoot.textContent = '';
  footer();
  // document.getElementById("myTable").deleteRow(-1);
  // newStoreName.render();
  // footer();
}

// STEP 2 ATTACH MY EVENT LISTENER
myForm.addEventListener('submit',handleClick);

function randNumCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function StoreName(name,minCust,maxCust,avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.customerEachHour = [];
  this.cookieSoldPerHour = [];
  storeName.push(this);
}

StoreName.prototype.calcPeoplePerHour = function(){
  for (let i = 0; i < hours.length - 1; i++){
    this.customerEachHour.push(randNumCust(this.minCust,this.maxCust));
  }
};

StoreName.prototype.salesPerHour = function(){
  this.calcPeoplePerHour()
  for (let i = 0; i < hours.length - 1; i++){
    let cookiesSold = Math.round(this.customerEachHour[i]*this.avgCookie);
    this.cookieSoldPerHour.push(cookiesSold);
    this.totalCookieSold += cookiesSold;
  }
};

// StoreName.prototype.renderAsTable = function(){
// };

StoreName.prototype.render = function(){
  this.salesPerHour();
  let tableElem = document.getElementById('table');
  let tableRow = document.createElement('tr');
  tableElem.appendChild(tableRow);

  // let articleElem = document.createElement('article');
  // salesSection.appendChild(articleElem);
  let tableTh = document.createElement('th');
  tableTh.textContent = `${this.name}`;
  tableRow.appendChild(tableTh);

  let inc = 0;
  for (let i = 0; i < hours.length; i++){
    const tCell = document.createElement('td');
    if ( i === hours.length - 1) {
      // for ( let j = 0; j < hours.length - 1; j++) {
      //   inc += tableRow[j];
      //   console.log(tableRow[j]);
      // }
      tCell.textContent = inc;
      inc = 0;
    } else {
      inc += this.cookieSoldPerHour[i];
      tCell.textContent = this.cookieSoldPerHour[i];
    }
    tableRow.appendChild(tCell);
  }
};


// Function Header ***
function header (){
  let tableElem = document.getElementById('table');
  let tableHead = document.createElement('thead');
  tableElem.appendChild(tableHead);
  let tableRow = document.createElement('tr');
  tableHead.appendChild(tableRow);
  let tableTh = document.createElement('th');
  tableTh.textContent = '';
  tableRow.appendChild(tableTh);

  for (let i = 0; i < hours.length; i++){
    const tCell = document.createElement('td');
    tCell.textContent = hours[i];
    tableRow.appendChild(tCell);
  }
}

// Function Footer ***
function footer (){
  let tableRow = document.createElement('tr');
  tableFoot.appendChild(tableRow);

  let tableTh = document.createElement('th');
  tableTh.textContent = 'Totals';
  tableRow.appendChild(tableTh);

  let inc = 0;

  for (let i = 0; i < hours.length; i++){
    const tCell = document.createElement('td');
    if ( i === hours.length - 1) {
      tCell.textContent = inc;
      inc = 0;
    } else {
      let hourlyTotal = 0;
      for (let j = 0; j < storeName.length;j++){
        hourlyTotal += storeName[j].cookieSoldPerHour[i];
      }
      tCell.textContent = hourlyTotal;
      inc += hourlyTotal;
    }
    tableRow.appendChild(tCell);
  }
}

//  function calls
new StoreName('Seattle',23,65,6.3);
new StoreName('Tokyo', 3, 24, 1.2);
new StoreName('Dubai', 11,20,3.7);
new StoreName('Paris',20,38,2.3);
new StoreName('Lima',2,16,4.6);

for (let i = 0; i < storeName.length; i++){
  storeName[i].render();
}

header();
footer();


// seattle.calcPeoplePerHour();
// seattle.salesPerHour();
// // seattle.render();
// tokyo.calcPeoplePerHour();
// tokyo.salesPerHour();
// // tokyo.render();
// dubai.calcPeoplePerHour();
// dubai.salesPerHour();
// // dubai.render();
// paris.calcPeoplePerHour();
// paris.salesPerHour();
// // paris.render();
// lima.calcPeoplePerHour();
// lima.salesPerHour();
// // lima.render();


// ****** standalone function to render the footer
// function renderFooter(){
//   let tr = document.createElement('tr');
//   cookieTable.appendChild('tr');
// };
  
// Building content for the row
// total cell
//   let th = document.createElement('th');
//   th.textContent = "Totals";
//   tr.appendChild(th);
//   // nested loop to populate data cells
//   for(let i = 0; i <hours.length;i++){
//     let hourlyTotal = 0;
//     for(let j = 0; j < storeArray.length; j++){
//       hourlyTotal = hourlyTotal + storeArray[j].cookies[i];
//       grandTotal = grandTotal + storeArray[j].cookies[i];
//     }
//     let td = document.createElement('td');
//     td.textContent = hourlyTotal;
//     tr.appendChild(td);
//   }
//   let td = document.createElement('td');
//   td.textContent = grandTotal;
//   tr.appendChild(td);
// }
// let seattle = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   customerEachHour: [],
//   cookieSoldPerHour: [],
//   totalCookieSold: 0,
//   calcPeoplePerHour: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.customerEachHour.push(randNumCust(this.minCust,this.maxCust));
//     }
//   },

//   salesPerHour: function(){
//     for (let i = 0; i < hours.length; i++){
//       let customers = randNumCust(this.minCust,this.maxCust)
//       let cookiesSold = Math.round(customers*this.avgCookie)
//       this.cookieSoldPerHour.push(cookiesSold);
//       this.totalCookieSold += cookiesSold
//     }
//   },
// render: function(){
//   this.salesPerHour();
//   let articleElem = document.createElement('article');
//   salesSection.appendChild(articleElem);
//   let h2Elem = document.createElement('h2');
//   h2Elem.textContent = `${this.name}`;
//   articleElem.appendChild(h2Elem);

//   for (let i = 0; i < hours.length; i++){
//     const li = document.createElement('li');
//     li.textContent = `${hours[i]} ${this.cookieSoldPerHour[i]}`;
//     articleElem.appendChild(li);

//     let pElem = document.createElement('p');
//     pElem.textContent = `${this.customer}`;
//     articleElem.appendChild(pElem);
//     let ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);
//     }
//   },
// };



// let tokyo = {
//   name: 'Tokyo',
//   customerEachHour: [],
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   cookieSoldPerHour: [],
//   totalCookieSold: 0,
//   calcPeoplePerHour: function(){
//     for (let i = 0; i < hours.length; i++){
//       this.customerEachHour.push(randNumCust(this.minCust,this.maxCust));
//     }
//   },

//   salesPerHour: function(){
//     for (let i = 0; i < hours.length; i++){
//       let customers = randNumCust(this.minCust,this.maxCust)
//       let cookiesSold = Math.round(customers*this.avgCookie)
//       this.cookieSoldPerHour.push(cookiesSold);
//       this.totalCookieSold += cookiesSold
//     }
//   },

//   render: function(){
//     this.salesPerHour();
//     let articleElem = document.createElement('article');
//     salesSection.appendChild(articleElem);
//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = `${this.name}`;
//     articleElem.appendChild(h2Elem);

//     for (let i = 0; i < hours.length; i++){
//       const li = document.createElement('li');
//       li.textContent = `${hours[i]} ${this.cookieSoldPerHour[i]}`;
//       articleElem.appendChild(li);

//       // let pElem = document.createElement('p');
//       // pElem.textContent = `${this.customer}`;
//       // articleElem.appendChild(pElem);
//       // let ulElem = document.createElement('ul');
//       // articleElem.appendChild(ulElem);

// Step 3 Define our callback.
// function handleSubmit(event){
//   event.preventDefault();

//   let name = event.target.newStoreName.value;
//   let cookiesolds = event.target.newStoreName.value;
//   interests = interests.split(', ');

//   let isGoodWithCats = event.target.isGoodWithCats.checked;
//   let isGoodWithDogs = event.target.isGoodWithDogs.checked;
//   let isGoodWithKids = event.target.isGoodWithKids.checked;

  
//   newStoreName.storeName();
//   newStoreName.render();

//   newStoreName.reset();


// let interests = event.target.interests.value;
//playing,eating,napping
// interests = interests.split(',');
// }

// Hint for Lab - Remove your footer and recreate it


// ****** STEP 2 Attach event Listener type of event. and our callback function or event handler.
// myform.addEventListener('submit', handleSubmit);