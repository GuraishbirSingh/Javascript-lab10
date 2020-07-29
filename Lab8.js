// Storing Header and section in variables
let Header = document.querySelector('header');
let Section = document.querySelector('section');

//Store  URL in a variable
let WebURL = 'https://guraishbirsingh.github.io/Lab8JavaScript/products.json';

//Creating a XHR object 
let req = new XMLHttpRequest();

req.open('GET', WebURL);
req.responseType = 'json';
req.send();
req.onload = function () {
    let Weirdo = req.response;
    console.log(Weirdo);
    Head(Weirdo);
    topDeals(Weirdo);
}

function Head(jsonObj) {
    let H1 = document.createElement('h1');
    H1.textContent = jsonObj['companyName'];
    Header.appendChild(H1);
    let p = document.createElement('p');
    p.textContent = jsonObj['headOffice'] + ' (Established in ' + jsonObj['established'] + ')';
    Header.appendChild(p);
}

function topDeals(jsonObj) {

    let topDeals = jsonObj['topDeals'];

    for (let i = 0; i < topDeals.length; i++) {
        let Article = document.createElement('article');
        let h3 = document.createElement('h3');
        let image = document.createElement('img');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let list = document.createElement('ul');

        image.setAttribute('src', 'images/' + topDeals[i].image);

        image.setAttribute('alt', topDeals[i].name);
        h3.textContent = [i + 1] + '. ' + topDeals[i].name;
        p2.textContent = 'Price: $' + topDeals[i].price;
        p3.textContent = topDeals[i].description;

        let features = topDeals[i].features;
        for (let a = 0; a < features.length; a++) {
            let Item = document.createElement('li');
            Item.textContent = features[a];
            list.appendChild(Item);
        }
        Article.appendChild(image);
        Article.appendChild(h3);
        Article.appendChild(p2);
        Article.appendChild(p3);
        Article.appendChild(list);
        Section.appendChild(Article);
    }
}