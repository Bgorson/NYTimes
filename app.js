//=======================Global Variables==================

var query;
var startDate;
var endDate ;
var quantity= 2;

//=======================Global URL==============================
var originalUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var api = "&api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931"

//=================================NY Functioning===========
function clearfunction(){ // take search form and clear everything with empty string
    $("#termParamter").val('')
    $('#startYear').val('')
    $('#endYear').val('')
    $('#articles').text('')
}

$("#clearButton").on("click", function(){
    clearfunction();
})

$("#searchArticle").on("click", function() {
  event.preventDefault(); // avoids reloading pg on submit
  query = '?q=' + $("#termParamter").val()
  
    //  store query input
    if ($("#startYear").val() != 0 && $("#endYear").val() !=0) {
  startDate = '&begin_date=' + $("#startYear").val()
  endDate = '&end_date='+ $("#endYear").val()
  quantity = $("#numArticles").val();
  console.log(startDate)
  console.log(endDate)
  console.log(quantity)

  url = originalUrl + query + startDate + endDate + api;
  console.log(url)
    }
    else {
      url = originalUrl + query + api;
    }
$.ajax({
  url: url,
  method: "GET"
}).then(function(result) {
  console.log(result)
  for (i=0;i<quantity;i++){
   var articleContainer=  $("<div>")
  $(articleContainer).append(result.response.docs[i].headline.main)
  $(articleContainer).append(result.response.docs[i].snippet)
  $(articleContainer).append(result.response.docs[i].web_url)
  $("#articles").append(articleContainer)
  }
});

  clearfunction();
});