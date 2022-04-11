'use strict';

// Seattle Object
const seattle = {
    name: 'Seattle Shop',
    minCust: 23,
    maxCust: 65, 
    avgCookieSold: 6.3,
    hours: ["6am", "7am", "8am", "9am", "10am", "11am",
     "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",],
    cookiesPerHour: [],
    custPerHour: [],
    totalCookies: 0,
    getNumOfCust: function() {
        for(let i = 0; i < this.hours.length; i++){
            this.custPerHour.push(randomNumOfCust(this.minCust,this.maxCust));
        }
    },
    getNumOfCookies: function() {
        this.getNumOfCust();
        for(let i = 0; i < this.hours.length; i++){
            this.cookiesPerHour.push(Math.floor(this.custPerHour[i]*this.avgCookieSold));
            this.totalCookies += this.cookiesPerHour[i];
        }
    },
    //add render function
    renderSeattle: function() {
        this.getNumOfCookies();
        const parentElem = document.getElementById('locationProfiles');
        
        const article = document.createElement('article');
        parentElem.appendChild(article);
        
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
        
        const p = document.createElement('p');
        article.appendChild(p);
        
        const ul = document.createElement('ul');
        article.appendChild(ul);
        
        for(let i = 0; i < this.hours.length; i++){
            const li = document.createElement('li');
            // change to cookiesPerHour when done
            li.textContent = `${this.hours[i]}: ${this.cookiesPerHour[i]} cookies`;
            ul.appendChild(li);
        }
        
        const total = document.createElement('total');
        total.textContent = `Total: ${this.totalCookies} cookies`;
        ul.appendChild(total);
    }
}

// Tokyo Object
const tokyo = {
    name: 'Tokyo Shop',
    minCust: 3,
    maxCust: 24, 
    avgCookieSold: 1.2,
    hours: ["6am", "7am", "8am", "9am", "10am", "11am",
     "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",],
    cookiesPerHour: [],
    custPerHour: [],
    totalCookies: 0,
    getNumOfCust: function() {
        for(let i = 0; i < this.hours.length; i++){
            this.custPerHour.push(randomNumOfCust(this.minCust,this.maxCust));
        }
    },
    getNumOfCookies: function() {
        this.getNumOfCust();
        for(let i = 0; i < this.hours.length; i++){
            this.cookiesPerHour.push(Math.floor(this.custPerHour[i]*this.avgCookieSold));
            this.totalCookies += this.cookiesPerHour[i];
        }
    },
    //add render function
    renderTokyo: function() {
        this.getNumOfCookies();
        const parentElem = document.getElementById('locationProfiles');
        
        const article = document.createElement('article');
        parentElem.appendChild(article);
        
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
        
        const p = document.createElement('p');
        article.appendChild(p);
        
        const ul = document.createElement('ul');
        article.appendChild(ul);
        
        for(let i = 0; i < this.hours.length; i++){
            const li = document.createElement('li');
            // change to cookiesPerHour when done
            li.textContent = `${this.hours[i]}: ${this.cookiesPerHour[i]} cookies`;
            ul.appendChild(li);
        }
        
        const total = document.createElement('total');
        total.textContent = `Total: ${this.totalCookies} cookies`;
        ul.appendChild(total);
    }
}

// Dubai Object
const dubai = {
    name: 'Dubai Shop',
    minCust: 11,
    maxCust: 38, 
    avgCookieSold: 3.7,
    hours: ["6am", "7am", "8am", "9am", "10am", "11am",
     "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",],
    cookiesPerHour: [],
    custPerHour: [],
    totalCookies: 0,
    getNumOfCust: function() {
        for(let i = 0; i < this.hours.length; i++){
            this.custPerHour.push(randomNumOfCust(this.minCust,this.maxCust));
        }
    },
    getNumOfCookies: function() {
        this.getNumOfCust();
        for(let i = 0; i < this.hours.length; i++){
            this.cookiesPerHour.push(Math.floor(this.custPerHour[i]*this.avgCookieSold));
            this.totalCookies += this.cookiesPerHour[i];
        }
    },
    //add render function
    renderDubai: function() {
        this.getNumOfCookies();
        const parentElem = document.getElementById('locationProfiles');
        
        const article = document.createElement('article');
        parentElem.appendChild(article);
        
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
        
        const p = document.createElement('p');
        article.appendChild(p);
        
        const ul = document.createElement('ul');
        article.appendChild(ul);
        
        for(let i = 0; i < this.hours.length; i++){
            const li = document.createElement('li');
            // change to cookiesPerHour when done
            li.textContent = `${this.hours[i]}: ${this.cookiesPerHour[i]} cookies`;
            ul.appendChild(li);
        }
        
        const total = document.createElement('total');
        total.textContent = `Total: ${this.totalCookies} cookies`;
        ul.appendChild(total);
    }
}

// Paris Object
const paris = {
    name: 'Paris Shop',
    minCust: 11,
    maxCust: 38, 
    avgCookieSold: 3.7,
    hours: ["6am", "7am", "8am", "9am", "10am", "11am",
     "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",],
    cookiesPerHour: [],
    custPerHour: [],
    totalCookies: 0,
    getNumOfCust: function() {
        for(let i = 0; i < this.hours.length; i++){
            this.custPerHour.push(randomNumOfCust(this.minCust,this.maxCust));
        }
    },
    getNumOfCookies: function() {
        this.getNumOfCust();
        for(let i = 0; i < this.hours.length; i++){
            this.cookiesPerHour.push(Math.floor(this.custPerHour[i]*this.avgCookieSold));
            this.totalCookies += this.cookiesPerHour[i];
        }
    },
    //add render function
    renderParis: function() {
        this.getNumOfCookies();
        const parentElem = document.getElementById('locationProfiles');
        
        const article = document.createElement('article');
        parentElem.appendChild(article);
        
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
        
        const p = document.createElement('p');
        article.appendChild(p);
        
        const ul = document.createElement('ul');
        article.appendChild(ul);
        
        for(let i = 0; i < this.hours.length; i++){
            const li = document.createElement('li');
            // change to cookiesPerHour when done
            li.textContent = `${this.hours[i]}: ${this.cookiesPerHour[i]} cookies`;
            ul.appendChild(li);
        }
        
        const total = document.createElement('total');
        total.textContent = `Total: ${this.totalCookies} cookies`;
        ul.appendChild(total);
    }
}

// Lima Object
const lima = {
    name: 'Lima Shop',
    minCust: 11,
    maxCust: 38, 
    avgCookieSold: 3.7,
    hours: ["6am", "7am", "8am", "9am", "10am", "11am",
     "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm",],
    cookiesPerHour: [],
    custPerHour: [],
    totalCookies: 0,
    getNumOfCust: function() {
        for(let i = 0; i < this.hours.length; i++){
            this.custPerHour.push(randomNumOfCust(this.minCust,this.maxCust));
        }
    },
    getNumOfCookies: function() {
        this.getNumOfCust();
        for(let i = 0; i < this.hours.length; i++){
            this.cookiesPerHour.push(Math.floor(this.custPerHour[i]*this.avgCookieSold));
            this.totalCookies += this.cookiesPerHour[i];
        }
    },
    //add render function
    renderLima: function() {
        this.getNumOfCookies();
        const parentElem = document.getElementById('locationProfiles');
        
        const article = document.createElement('article');
        parentElem.appendChild(article);
        
        const h2 = document.createElement('h2');
        h2.textContent = this.name;
        article.appendChild(h2);
        
        const p = document.createElement('p');
        article.appendChild(p);
        
        const ul = document.createElement('ul');
        article.appendChild(ul);
        
        for(let i = 0; i < this.hours.length; i++){
            const li = document.createElement('li');
            // change to cookiesPerHour when done
            li.textContent = `${this.hours[i]}: ${this.cookiesPerHour[i]} cookies`;
            ul.appendChild(li);
        }
        
        const total = document.createElement('total');
        total.textContent = `Total: ${this.totalCookies} cookies`;
        ul.appendChild(total);
    }
}



function randomNumOfCust(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

seattle.renderSeattle();
tokyo.renderTokyo();
dubai.renderDubai();
paris.renderParis();
lima.renderLima();

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
