var myApp = angular.module('weziro',[]);

var queryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();

var setLanguage = function()
{
	$.ajax({url:"http://ipinfo.io",dataType:'jsonp'})
		.done(function(response)
		{
			var languageFound = false;
			
			switch(response.country)
			{
				case "TR":languageFound = true;break;
				case "GB":languageFound = true;break;
			}
			
			if(languageFound){window.location.assign("/" + response.country);}
			else{window.location.assign("/GB");}
		});

}