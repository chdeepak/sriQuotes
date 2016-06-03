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
    }, {
        "quoteid": 21,
        "quotemessage": "If you can win over your mind, you can win over the whole world."
    }, {
        "quoteid": 22,
        "quotemessage": "Life works on strange laws of nature (Karma). One never knows when a friend turns enemy & vice-versa. Rely on your Self; self-reliance"
    }, {
        "quoteid": 23,
        "quotemessage": "Why can't we control our anger? because we love perfection. Make a little room for imperfection in our lives."
    }, {
        "quoteid": 24,
        "quotemessage": "If something can bring you great pleasure, it can also bring you pain."
    }, {
        "quoteid": 25,
        "quotemessage": "Don't Fall in love, Rise in Love!"
    }, {
        "quoteid": 26,
        "quotemessage": "There is no use getting angry at something that has already happened.All you can do is your best to check it doesn't happen again."
    }, {
        "quoteid": 27,
        "quotemessage": "Nothing in the world can bother you as much as your own mind, I tell you. In fact, others seem to be bothering you, but it is not other, it is your own mind."
    }, {
        "quoteid": 28,
        "quotemessage": "Infinity means it is permeating all the finite things"
    }, {
        "quoteid": 29,
        "quotemessage": "The path of love is not a tedious path. It's a path of joy. It's a path of singing and dancing."
    }, {
        "quoteid": 30,
        "quotemessage": "Joy is never tomorrow; it is always now."
    }, {
        "quoteid": 31,
        "quotemessage": "Life is a ball we should play with it !"
    }, {
        "quoteid": 32,
        "quotemessage": "You need to see your life in context of time and space — how vast creation is, how big the universe is and how small your life is, relative"
    }, {
        "quoteid": 33,
        "quotemessage": "If someone blames you directly, do not believe it. Just know that they are taking away your bad karma and let it"
    }, {
        "quoteid": 34,
        "quotemessage": "Your desire for pleasure or happiness makes you unhappy."
    }, {
        "quoteid": 35,
        "quotemessage": "Healthy breathing is the key to eliminating these toxins and harmonising emotions. Neither"
    }, {
        "quoteid": 36,
        "quotemessage": "Shasana means rules someone else imposes on you. Anushasana means rules you impose on yourself."
    }, {
        "quoteid": 37,
        "quotemessage": "say, drop all your defenses. Anyone can make a mistake — even you. Do not defend your mistakes; just accept them and move on. When you are totally defenseless, that is when you will be completely strong."
    }, {
        "quoteid": 38,
        "quotemessage": "We should not exit from this world without finding out who we are and where we have come from. This is very important."
    }, {
        "quoteid": 39,
        "quotemessage": "Forgetfulness of the infinite is misery. Forgetfulness of the trivial is ecstasy."
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
