
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let chalk = require("chalk");

let xhr = new XMLHttpRequest();
let name = process.argv[2];
let authority = process.argv[3];
let urlBase = "http://api.ratings.food.gov.uk/Establishments?name=";
let url = urlBase+name;

// testing:
//console.log("fetching: " + url)

// false below refers to async = false, making it synchronous
xhr.open("GET", url, false);
xhr.setRequestHeader('x-api-version', '2');
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
console.log();

let res = JSON.parse(xhr.responseText);

for (let establishment of res.establishments) {
    if (authority && establishment.LocalAuthorityName.includes(authority)) {
        let rating = establishment.RatingValue
        console.log('Name: ' + chalk.blue(establishment.BusinessName));
        console.log('Address Line 1: ' + establishment.AddressLine1);
        establishment.AddressLine2 ?
          console.log('Address Line 2: ' + establishment.AddressLine2) : {};

        establishment.AddressLine3 ?
          console.log('Address Line 3: ' + establishment.AddressLine3) : {};

        establishment.AddressLine4 ?
          console.log('Address Line 4: ' + establishment.AddressLine4) : {};

        console.log('PostCode: ' + establishment.PostCode);
        console.log('Last rated date: ' + establishment.RatingDate);
        console.log('Rating: ' +
          (
            rating > 3 ?
            chalk.green(rating) :
            chalk.red(rating))
          );
        console.log();
    }
}
