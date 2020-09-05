const quoteContainer = document.getElementById('quote-container');
const quotetext = document.getElementById('quote');
const author = document.getElementById('author');
const share = document.getElementById('share');
const next = document.getElementById('new-quote');

//get quote from API

async function getQuote(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    
    try{
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        author.innerHTML = data.quoteAuthor;
        quotetext.innerHTML = data.quoteText;

    }catch(error){

        getQuote();
    }
};

getQuote();