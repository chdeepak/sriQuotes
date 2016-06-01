(function(){
var quotes = [
    {
        "quoteid": 1,
        "quotemessage": "The only thing you must remember is how fortunate you are. When you forget this, you become sad."
    },
    {
        "quoteid": 2,
        "quotemessage": "This definite knowledge that I am not the body, I am the Self, I am the space, I am the Imperishable, untouched, untainted by the \\\"prakriti,\\\" and by this world around me; this body is all hollow and empty, and every particle in this body is changing, and changing, and changing; the mind is changing and changing and changing---this definite knowledge is the way out of the cycle."
    },
    {
        "quoteid": 3,
        "quotemessage": "When you realise everyone is a part of your Self, you enjoy the whole world without a sense of craving."
    },
    {
        "quoteid": 4,
        "quotemessage": "When we get in touch with the source of life then all other tensions, worries fall off and we can sing, dance and be happy. Life can become very intense, intense in the sense of being joyful."
    },
    {
        "quoteid": 5,
        "quotemessage": "Your bondage to the Master, to the Truth, to the ancient Knowledge of the Rishis is your saviour."
    },
    {
        "quoteid": 6,
        "quotemessage": "The mind looks for something new. The heart longs for the old. Life is a blend of both."
    },
    {
        "quoteid": 7,
        "quotemessage": "Use anger as a tool but don’t be a tool of anger."
    },
    {
        "quoteid": 8,
        "quotemessage": "Just wake up and see that you are beautiful. The innocence in you is so beautiful. The dance in you is so beautiful."
    }
];
  var images = [
    { "imageId":"1", "uri":"/srisri.jpeg" },
    { "imageId":"2", "uri":"/aol.jpeg" },
    { "imageId":"3", "uri":"/happy.jpeg" },
    { "imageId":"4", "uri":"/SriSriRaviShankar.jpeg" }
    ];



var quote = quotes[Math.floor(Math.random()*quotes.length)];

var image = images[Math.floor(Math.random()*images.length)];

document.getElementById("quote").innerHTML =  '<p class="quote">' +quote.quotemessage + '</p>';

document.body.style.backgroundImage = 'url(images/'+ image.uri +')';

})();
