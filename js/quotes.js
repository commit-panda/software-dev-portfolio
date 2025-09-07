async function getRandomQuote() {
  try {
    const response = await fetch("https://zenquotes.io/api/quotes/random");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
    const randomQuote = data[Math.floor(Math.random() * data.length)];

    document.querySelector("quote-text").innerHTML = randomQuote.q;
    document.querySelector("quote-author").innerHTML = `~ ${randomQuote.a}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    document.querySelector("quote-text").innerHTML = "Failed to load quote.";
    document.getElementById("quote-author").innerHTML = "Author";
  }
}

getRandomQuote();
setInterval(getRandomQuote, 8000);

