const quoteContainer = document.getElementById("quote-container");
const authorText = document.getElementById("author");
const quoteText = document.getElementById("quote");
const twitterButton = document.getElementById("twitter");
const newQuoteButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}


async function getQuote() {
  showLoadingSpinner();
  const apiUrl = "https://api.quotable.io/quotes/random";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data[0]);
    if (data.author === "") {
      authorText.innerText = "Unknown";
    } else {
      authorText.innerText = data[0].author;
    }

    if (data.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }
    quoteText.innerText = data[0].content;
    removeLoadingSpinner();
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}

function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
  window.open(twitterUrl, "_blank");
}

newQuoteButton.addEventListener("click", getQuote);
twitterButton.addEventListener("click", tweetQuote);


getQuote();
