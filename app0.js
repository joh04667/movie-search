$(function() {
  // global var for movie data
  var data;

  // data fetch api call
  function getData(url) {
   $.get(url).done(function(response) {
    data = response;
    addMovie();
  });
  }

//add movie to movie div
function addMovie() {
  $('.movie').empty();
  var img = "<img src=" + data.Poster + " />";
  var title = "<h2>" + data.Title + "</h2>";
  var year = "<h3>" + data.Year + "</h3>";
  var plot = "<p>" + data.Plot + "</p>";
  $('.movie').css({"background-image": "url(" + data.Poster + ")"});
  $('.movie').append(img + "<div class='plot'>" + title + year + plot + "</div>");
}

// gets data for movie search and replaces whitespace
$("#search").on("submit", function(event) {
  event.preventDefault();
  var name = $("#movietitle").val().replace(/\s/ig, "+");
  getData('http://www.omdbapi.com/?t=' + name + '&y=&plot=short&r=json');
});

// keeps button selected ya ya good job high five
function clear() {
  $('#one').removeClass('selected');
  $('#two').removeClass('selected');
  $('#three').removeClass('selected');

}



  //pretedermined movie buttons
    $('#one').on('click', function() {
      clear();
      $(this).addClass('selected');
      getData('http://www.omdbapi.com/?t=monty+python+and+the+holy+grail&y=&plot=short&r=json');
    });

    $('#two').on('click', function() {
      clear();
      $(this).addClass('selected');
      getData('http://www.omdbapi.com/?t=miracle&y=&plot=short&r=json');
    });

    $('#three').on('click', function() {
      clear();
      $(this).addClass('selected');
      getData('http://www.omdbapi.com/?t=lion+king&y=&plot=short&r=json');
    });











}); //
