// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//the array of quotes. Better to make write it in one line than to use multiple lines for it.
var quotes = [
	{ quote: 'A diamond is a chunk of coal that did well under pressure', source: 'Henry Kissinger', category: 'Political Figure' },
	{ quote: 'When you know better you do better', source: 'Maya Angelou', category: 'American Poet' },
	{ quote: 'I do not think of all the misery but of all the beauty that remains', source: 'Anne Frank', category: 'Diarist' },
	{ quote: 'If you are going through hell keep going', source: 'Winston Churchill', category: 'Political Figure' },
	{ quote: 'The higher we are placed the more humbly we should walk', source: 'Marcus Tullius Cicero', category: 'Roman Politician' },
	{ quote: 'Every accomplishment starts with the decision to try', source: 'John F Kennedy', category: 'Former President' },
	{ quote: 'I never lose. I either win or learn', source: 'Nelson Mandela', category: 'Historical Figure' },
];

// the amount of quotes i have.
quotes.length
//the first quote
quotes[0]
//the last quote
quotes[quotes.length - 1]

//Another way to do the below variable:
//var fractional = Math.random() * quotes.length;
//var random_index = Math.Floor(fractional);
//var quote = quotes[random_index];
//quotes[quotes.length - 1]


var random_quote = quotes[Math.floor(Math.random() * quotes.length)];

//This rounds it to the nearest number
Math.floor();

// how to get the quote to be random and rounded it to the nearest whole number.
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)]
};

// the function to get random colors.
function colors() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
  return rgb
};
 //Use this function to print to the webpage
function printQuote() {
  var background = colors();
  var randomQuote = getRandomQuote();
  var display='';

//this is how you get each tag to appear on the webpage.
  display += '<p class="quote">' + randomQuote.quote + "</p>";
  display += '<p class="source">' + randomQuote.source +"</p>";
  display += '<p class="category">' + randomQuote.category + "</p>";

 // log everything to the console to make sure it works
  console.log(randomQuote.quote)
  console.log(randomQuote.source)


  document.getElementById("quote-box").innerHTML = display;
  document.body.style.backgroundColor = background;
  document.getElementById("loadQuote").style.backgroundColor = background;
};

printQuote();

printQuote();

//how to set a timer for the quotes. The number is in milliseconds.
setInterval(printQuote, 5000);
