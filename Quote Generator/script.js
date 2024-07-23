let quote=document.getElementById("quote");
let author=document.getElementById("authorName");
let button=document.getElementById("btn");

const getQuote=async()=>{
    const response=await fetch('https://type.fit/api/quotes');
    const data=await response.json();
    console.log(data);
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];

    quote.innerText = randomQuote.text;
    author.innerText = randomQuote.author ? randomQuote.author : "Unknown";
}
window.addEventListener("load",getQuote);
button.addEventListener("click",getQuote);