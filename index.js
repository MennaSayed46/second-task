var quote = document.getElementById('quote');
var writer = document.getElementById('writer');

var quotes = [
    {
        quote: "You miss 100% of the shots you don't take.",
        writer: "--Wayne Gretzy"
    },

    {
        quote: "The best revenge is massive success.",
        writer: "--Frank Sinatra"
    },


    {
        quote: " “Be yourself; everyone else is already taken.” ",
        writer: "― Oscar Wilde"
    },
    {
        quote: "“A room without books is like a body without a soul.",
        writer: "― Marcus Tullius Cicero"
    },

    {
        quote: "“Be the change that you wish to see in the world.”",
        writer: "― Mahatma Gandhi"
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        writer: "― Mae West"
    },
    {
        quote: "“The man who does not read has no advantage over the man who cannot read.”",
        writer: "― Mark Twain"
    },
    {
        quote: "“If you don't stand for something you will fall for anything.”",
        writer: "― Gordon A. Eadie"
    },


];

function displayQuotes() {
    clearQuote();
    quote.innerHTML += quotes[Math.floor(Math.random() * quotes.length)].quote;
    writer.innerHTML += quotes[Math.floor(Math.random() * quotes.length)].writer;
    clearQuote();
    addquotes();

}


function clearQuote() {
    quote.innerHTML = '';
    writer.innerHTML = '';
}
function addquotes() {
    quote.innerHTML += quotes[Math.floor(Math.random() * quotes.length)].quote;
    writer.innerHTML += quotes[Math.floor(Math.random() * quotes.length)].writer;

}


