'use strict';

const hours = ["6:00am", "7:00am", "8:00am", "9:00am", "10:00am", "11:00am","12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm", "6:00pm", "7:00pm", "Daily Location Total"];

let allStores = [];
let totalHourlyCookies = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function Location(city, minCust, maxCust, avgCookieSold) {
    this.city = city;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSold = avgCookieSold;
    this.cookiesPerHour = [];
    this.custPerHour = [];
    this.totalCookies = 0;
    allStores.push(this);
}

//help from TA David
function getHourlyTotals() {
    for(let i = 0; i < allStores.length; i++){
        for(let j = 0; j < hours.length; j++){
            totalHourlyCookies[j] += allStores[i].cookiesPerHour[j];
        }
    }
}

Location.prototype.getNumOfCust = function() {
    for(let i = 0; i < hours.length; i++){
        this.custPerHour.push(randomNumOfCust(this.minCust,this.maxCust));
    }
}

Location.prototype.getNumOfCookies = function() {
    this.getNumOfCust();
    let total = 0;
    for(let i = 0; i < hours.length-1; i++){
        this.cookiesPerHour.push(Math.floor(this.custPerHour[i]*this.avgCookieSold));
        total += this.cookiesPerHour[i];
    }
    this.cookiesPerHour.push(total);
}

Location.prototype.render = function() {
    this.getNumOfCookies();
    const parentElem = document.getElementById('locationProfiles');
        
    const article = document.createElement('article');
    parentElem.appendChild(article);
    
    const p = document.createElement('p');
    article.appendChild(p);

    // table
    const tableElem = document.getElementById('cookieTable');
    article.appendChild(tableElem);

    const headerRow = document.createElement('tr');
    tableElem.appendChild(headerRow);
    
    // const hourHeaderCell = document.createElement('th');
    // headerRow.appendChild(hourHeaderCell);
    // hourHeaderCell.textContent = '';
    
    // for(let i = 0; i < hours.length; i++){
    //     const realHourHeaderCell = document.createElement('th');
    //     headerRow.appendChild(realHourHeaderCell);
    //     realHourHeaderCell.textContent = hours[i];
    // }

    const dataRow = document.createElement('tr');
    tableElem.appendChild(dataRow);

    const dataCell = document.createElement('td');
    dataRow.appendChild(dataCell);
    dataCell.textContent = this.city;
    for(let i = 0; i < hours.length; i++){
        const numDataCell = document.createElement('td');
        dataRow.appendChild(numDataCell);
        numDataCell.textContent = this.cookiesPerHour[i];
    }
}

const seattle = new Location('Seattle', 23, 65, 6.3);
const tokyo = new Location('Tokyo', 3, 24, 1.2);
const dubai = new Location('Dubai', 11, 38, 3.7);
const paris = new Location('Paris', 20, 38, 2.3);
const lima = new Location('Lima', 2, 16, 4.6);

function randomNumOfCust(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

function renderHeader(){
    const parentElem = document.getElementById('locationProfiles');
        
    const article = document.createElement('article');
    parentElem.appendChild(article);
    
    const p = document.createElement('p');
    article.appendChild(p);

    // table
    const tableElem = document.createElement('table');
    tableElem.setAttribute('id', 'cookieTable')
    article.appendChild(tableElem);

    const headerRow = document.createElement('tr');
    tableElem.appendChild(headerRow);
    
    const hourHeaderCell = document.createElement('th');
    headerRow.appendChild(hourHeaderCell);
    hourHeaderCell.textContent = 'Location';
    
    for(let i = 0; i < hours.length; i++){
        const realHourHeaderCell = document.createElement('th');
        headerRow.appendChild(realHourHeaderCell);
        realHourHeaderCell.textContent = hours[i];
    }
}
function renderFooter() {
    const parentElem = document.getElementById('locationProfiles');
        
    const article = document.createElement('article');
    parentElem.appendChild(article);
    
    const p = document.createElement('p');
    article.appendChild(p);

    // table
    const tableElem = document.getElementById('cookieTable');
    article.appendChild(tableElem);

    const headerRow = document.createElement('tr');
    tableElem.appendChild(headerRow);
    
    const totalFooterCell = document.createElement('th');
    headerRow.appendChild(totalFooterCell);
    totalFooterCell.textContent = 'Total';
    
    for(let i = 0; i < hours.length; i++){
        const realFooterCell = document.createElement('th');
        headerRow.appendChild(realFooterCell);
        realFooterCell.textContent = totalHourlyCookies[i];
    }
}

renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
getHourlyTotals();
renderFooter();

console.log(seattle.totalCookies);

// create the parent element of our DOM 

/*
needs:
location
min cust/hour
max cust/hour
avg cookie/sold

<!-- generate this from js: -->
<!-- <article>
<h2></h2>
<p></p>
<ul>
<li></li>
</ul>
<img>
</article> -->
*/
