(function() {
    var quotes = [{
        "quoteid": 1,
        "quotemessage": "The only thing you must remember is how fortunate you are. When you forget this, you become sad."
    }, {
        "quoteid": 2,
        "quotemessage": "This definite knowledge that I am not the body, I am the Self, I am the space, I am the Imperishable, untouched, untainted by the \"prakriti\", and by this world around me; this body is all hollow and empty, and every particle in this body is changing, and changing, and changing; the mind is changing and changing and changing---this definite knowledge is the way out of the cycle."
    }, {
        "quoteid": 3,
        "quotemessage": "When you realise everyone is a part of your Self, you enjoy the whole world without a sense of craving."
    }, {
        "quoteid": 4,
        "quotemessage": "When we get in touch with the source of life then all other tensions, worries fall off and we can sing, dance and be happy. Life can become very intense, intense in the sense of being joyful."
    }, {
        "quoteid": 5,
        "quotemessage": "Your bondage to the Master, to the Truth, to the ancient Knowledge of the Rishis is your saviour."
    }, {
        "quoteid": 6,
        "quotemessage": "The mind looks for something new. The heart longs for the old. Life is a blend of both."
    }, {
        "quoteid": 7,
        "quotemessage": "Use anger as a tool but don't be a tool of anger."
    }, {
        "quoteid": 8,
        "quotemessage": "Just wake up and see that you are beautiful. The innocence in you is so beautiful. The dance in you is so beautiful."
    }, {
        "quoteid": 9,
        "quotemessage": "When feverishness clogs your head, your mind is not clear; poetry cannot dawn on that. If there is feverishness, any creative thought will not come."
    }, {
        "quoteid": 10,
        "quotemessage": "One who is in love with the entire Universe worships everything in this Universe"
    }, {
        "quoteid": 11,
        "quotemessage": "The power of spiritual knowledge gives you centeredness, which brings out passion in work & dispassion in meditation."
    }, {
        "quoteid": 12,
        "quotemessage": "When your intentions are very pure and clear, nature brings support to you."
    }, {
        "quoteid": 13,
        "quotemessage": "Wherever there is sincerity & talent, people do recognize them. It may take some time but we should have some patience and hold on to our passion.”"
    }, {
        "quoteid": 14,
        "quotemessage": "Do not be feverish about success, if your aim is clear and you have patience to move towards it, nature will support you."
    }, {
        "quoteid": 15,
        "quotemessage": "Don’t be over complacent or too feverish, take a middle path."
    }, {
        "quoteid": 16,
        "quotemessage": "Recognize and honour your uniqueness."
    }, {
        "quoteid": 17,
        "quotemessage": "Spiritual knowledge improves intuitive ability, innovative ability and communication."
    }, {
        "quoteid": 18,
        "quotemessage": "The positive aspect of competition in a business scenario is it helps you to be more alert and innovative."
    }, {
        "quoteid": 19,
        "quotemessage": "Keeping the mind open to new ideas, not being too anxious about success, putting 100% effort and meditation is the formula for entrepreneurs."
    }, {
        "quoteid": 20,
        "quotemessage": "Love is not an emotion. It is your very existence."
    }, {
        "quoteid": 21,
        "quotemessage": "Human evolution has two steps - \nfrom being somebody to being nobody;\nand from being nobody to being everybody.\nThis knowledge can bring \nsharing and caring throughout the world."
    }, {
        "quoteid": 22,
        "quotemessage": "Faith is realizing that you always get what you need."
    }, {
        "quoteid": 23,
        "quotemessage": "Today is a gift from God - that is why it is called the present."
    }, {
        "quoteid": 24,
        "quotemessage": "When you share your misery, it will not diminish. When you fail to share your joy, it diminishes. Share your problems only with the Divine, not with anyone else, as that will only increase the problems. Share your joy with everyone.\n\nListen to others; yet do not listen. If your mind gets stuck in their problems, not only are they miserable, but you also become miserable."
    }];
    var images = [{
        "imageId": "2",
        "uri": "/aol.jpeg"
    }, {
        "imageId": "3",
        "uri": "/happy.jpeg"
    }, {
        "imageId": "4",
        "uri": "/SriSriRaviShankar.jpeg"
    }, {
        "imageId": "5",
        "uri": "/srisri1.jpeg"
    }, {
        "imageId": "6",
        "uri": "/srisri2.jpeg"
    }, {
        "imageId": "7",
        "uri": "/srisri3.jpeg"
    }, {
        "imageId": "8",
        "uri": "/srisri4.jpeg"
    }, {
        "imageId": "9",
        "uri": "/srisri5.jpeg"
    }, {
        "imageId": "10",
        "uri": "/srisri6.jpeg"
    }, {
        "imageId": "11",
        "uri": "/srisri7.jpeg"
    }];



    var quote = quotes[Math.floor(Math.random() * quotes.length)];

    var image = images[Math.floor(Math.random() * images.length)];

    document.getElementById("quote").innerHTML = '<p class="quote">' + quote.quotemessage + '</p>';

    document.body.style.backgroundImage = 'url(images/' + image.uri + ')';

})();
