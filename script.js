const quoteContainer = document.getElementById('quote-container');
const quotetext = document.getElementById('quote');
const author = document.getElementById('author');
const twitter = document.getElementById('share-button');
const next = document.getElementById('new-quote');

//get quote from API

async function getQuote(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    
    try{
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();

        if(data.quoteAuthor == ""){
            author.innerText == 'Unknown';
        }
        else{
            author.innerText = data.quoteAuthor;
        }   

        if (data.quoteText.length > 50){
            quotetext.classList.add('long-quote');
        }
        else{
            quotetext.classList.remove('long-quote');
        }

        quotetext.innerText = data.quoteText;
        
    }catch(error){

        getQuote();
    }
};


//tweet quote

function share(){
    const tweet = quotetext.innerText;
    const authorB = author.innerText;
    const url = `https://twitter.com/intent/tweet?text=${tweet} - ${authorB}`;
    window.open(url, '_blank');
}


//event listener
next.addEventListener('click', getQuote);
twitter.addEventListener('click', share);


getQuote();