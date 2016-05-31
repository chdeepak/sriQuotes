(function(){
var quotes = [
    { "quoteId":"1", "quoteMessage":"The only thing you must remember is how fortunate you are. When you forget this, you become sad" },
    { "quoteId":"2", "quoteMessage":"This definite knowledge that I am not the body, I am the Self, I am the space, I am the Imperishable, untouched, untainted by the \"prakriti,\" and by this world around me; this body is all hollow and empty, and every particle in this body is changing, and changing, and changing; the mind is changing and changing and changing---this definite knowledge is the way out of the cycle." },
    { "quoteId":"3", "quoteMessage":"When you realise everyone is a part of your Self, you enjoy the whole world without a sense of craving" }
    ];
  var images = [
    { "imageId":"1", "uri":"/srisri.jpeg" },
    { "imageId":"2", "uri":"/aol.jpeg" },
    { "imageId":"3", "uri":"/happy.jpeg" },
    { "imageId":"4", "uri":"/SriSriRaviShankar.jpeg" }
    ];



var quote = quotes[Math.floor(Math.random()*quotes.length)];

var image = images[Math.floor(Math.random()*images.length)];

document.getElementById("quote").innerHTML =  '<p class="quote">' +quote.quoteMessage + '</p>'+ '<p class="author" align="right">' + ' - Sri Sri' + '</p>';

document.body.style.backgroundImage = 'url(images/'+ image.uri +')';

})();
