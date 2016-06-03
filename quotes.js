(function() {
    var quotes = [{
        "quoteid": 1,
        "quotemessage": "The only thing you must remember is how fortunate you are. When you forget this, you become sad."
    }, {
        "quoteid": 2,
        "quotemessage": "Your bondage to the Master, to the Truth, to the ancient Knowledge of the Rishis is your saviour."
    }, {
        "quoteid": 3,
        "quotemessage": "When you realise everyone is a part of your Self, you enjoy the whole world without a sense of craving."
    }, {
        "quoteid": 4,
        "quotemessage": "The mind looks for something new. The heart longs for the old. Life is a blend of both."
    }, {
        "quoteid": 5,
        "quotemessage": "Use anger as a tool but don't be a tool of anger."
    }, {
        "quoteid": 6,
        "quotemessage": "One who is in love with the entire Universe worships everything in this Universe"
    }, {
        "quoteid": 7,
        "quotemessage": "The power of spiritual knowledge gives you centeredness, which brings out passion in work & dispassion in meditation."
    }, {
        "quoteid": 8,
        "quotemessage": "Just wake up and see that you are beautiful. The innocence in you is so beautiful. The dance in you is so beautiful."
    }, {
        "quoteid": 9,
        "quotemessage": "When your intentions are very pure and clear, nature brings support to you."
    }, {
        "quoteid": 10,
        "quotemessage": "Wherever there is sincerity & talent, people do recognize them. It may take some time but we should have some patience and hold on to our passion."
    }, {
        "quoteid": 11,
        "quotemessage": "Do not be feverish about success, if your aim is clear and you have patience to move towards it, nature will support you."
    }, {
        "quoteid": 12,
        "quotemessage": "Don't be over complacent or too feverish, take a middle path."
    }, {
        "quoteid": 13,
        "quotemessage": "Recognize and honour your uniqueness."
    }, {
        "quoteid": 14,
        "quotemessage": "Spiritual knowledge improves intuitive ability, innovative ability and communication."
    }, {
        "quoteid": 15,
        "quotemessage": "The positive aspect of competition in a business scenario is it helps you to be more alert and innovative."
    }, {
        "quoteid": 16,
        "quotemessage": "Keeping the mind open to new ideas, not being too anxious about success, putting 100% effort and meditation is the formula for entrepreneurs."
    }, {
        "quoteid": 17,
        "quotemessage": "Love is not an emotion. It is your very existence."
    }, {
        "quoteid": 18,
        "quotemessage": "Faith is realizing that you always get what you need."
    }, {
        "quoteid": 19,
        "quotemessage": "Today is a gift from God - that is why it is called the present."
    }, {
        "quoteid": 20,
        "quotemessage": "When feverishness clogs your head, your mind is not clear; poetry cannot dawn on that. If there is feverishness, any creative thought will not come."
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
