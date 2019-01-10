//=======================Global Variables==================

var query = "fda";
var startDate = "201802007";
var endDate = "20190506";
var quantity;


// submit  = searchArticle
// clear = clearButton
// search term = termparamater
// start date = startYear
// end date = endYear
// quantity = numArticles

//=======================Global URL==============================
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

//=================================NY Functioning===========
function clearfunction(){ // take search form and clear everything with empty string
    $("#termParameter")
    .val('')

    $('#startYear').val('')
    $('#endYear').val('')

}

$("#clearButtton").on("click", function(){

    clearfunction();

})




$("#searchArticle").on("click", function() {
  event.preventDefault(); // avoids reloading pg on submit
  query = $("#termParameter")
    .val()
    .trim(); // store query input
  startDate = $("#startYear")
    .val()
    .trim();
  endDate = $("#endYear")
    .val()
    .trim();
  quantity = $("#numArticles").val();

  url +=
  "?" +
  $.param({
    "api-key": "b9f91d369ff59547cd47b931d8cbc56b:0:74623931",
    q: query,
    begin_date: startDate,
    end_date: endDate
  });

$.ajax({
  url: url,
  method: "GET"
}).then(function(result) {
  console.log(result);
});

  clearfunction();
});