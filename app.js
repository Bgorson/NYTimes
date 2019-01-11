//=======================Global Variables==================

var query = "fda";
var startDate = '&begin_date=' + "201802007";
var endDate = '&end_date='+  "20190506";
var quantity= 2;


// submit  = searchArticle
// clear = clearButton
// search term = termparamater
// start date = startYear
// end date = endYear
// quantity = numArticles

//=======================Global URL==============================
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var api = "&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931"

//=================================NY Functioning===========
function clearfunction(){ // take search form and clear everything with empty string
    $("#termParameter")
    .val('')

    $('#startYear').val('')
    $('#endYear').val('')

}

$("#clearButton").on("click", function(){

    clearfunction();

})




$("#searchArticle").on("click", function() {
  event.preventDefault(); // avoids reloading pg on submit
  query = '?q=' + $("#termParamter").val()
  
     // store query input
  // startDate = '&begin_date=' + $("#startYear").val()
  // endDate = '&end_date='+ $("#endYear").val()
  quantity = $("#numArticles").val();

  url += query + startDate + endDate + api;
  console.log(url)

$.ajax({
  url: url,
  method: "GET"
}).then(function(result) {
  console.log(result);
});

  clearfunction();
});