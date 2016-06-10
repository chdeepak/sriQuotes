
function createSideBar(mostVisitedURLs) {
  var urlsCount = "";

  if(mostVisitedURLs.length < 10)
    urlsCount = mostVisitedURLs.length;
  else
    urlsCount = 10;

  for (var i = 0; i < urlsCount; i++) {
    var link = mostVisitedURLs[i].url;
    var title = mostVisitedURLs[i].title;
    if(title.length >30){
      title = title.substring(0,27);
      title = title.concat('...');
    }
    $('#sidebar ol').append('<a href="'+link+'">'+'<li><div style="color:black"><img src="https://plus.google.com/_/favicon?domain_url='+link+'">      '+title+'</div></li></a>');
  }
}

chrome.topSites.get(createSideBar);
