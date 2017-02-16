var info = {
		"full_name" : "Ray Villalobos",
		"title" : "Staff Author",
		"links" : [
				{ "blog"     : "http://iviewsource.com" },
				{ "facebook" : "http://facebook.com/iviewsource" },
				{ "podcast"  : "http://feeds.feedburner.com/authoredcontent" },
				{ "twitter"  : "http://twitter.com/planetoftheweb" },
				{ "youtube"  : "http://www.youtube.com/planetoftheweb" }
			]
		};

  var output = "";
  for (var i = 0; i < info.links.length; i++) {
    for (key in info.links[i]) {
      if (info.links[i].hasOwnProperty(key)) {
        output += '<li>' +
          '<a href = "' + info.links[i][key] +
          '">' + key + '</a>' + '</li>';
      }
    }
  }

  const update = document.getElementById('links');
  update.innerHTML = output;
