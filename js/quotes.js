(function() {

    var quotes = new Array();
    var images = new Array();

    $.when($.getJSON('./../json/quotes.json'), $.getJSON('./../json/images.json'))
        .done(function(quotesFile, photosFile) {
            quotes = quotesFile[0].quotes;
            images = photosFile[0].photos;

            var quoteIndex = Math.floor(Math.random() * quotes.length);
            var quote = quotes[quoteIndex];

            var imageIndex = 10;//Math.floor(Math.random() * images.length)
            var image = images[imageIndex];

            document.getElementById("quote").innerHTML = '<p class="quote">' + quote.quotemessage + '</p>';

            document.body.style.backgroundImage = 'url(images/' + image.uri + ')';

        });

})();
