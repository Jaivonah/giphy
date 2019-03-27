// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
       var search =$("input").val();

    console.log(search);
    var searchUrl= "https://api.giphy.com/v1/gifs/search?q=" +search + "&rating=pg&api_key=dc6zaTOxFJmzC";
        
    $.ajax({
        url: searchUrl,
          method: "GET",
        success: function(response){
            console.log(response);
            //$("body").append("<img src=" + response.data[1].images.fixed_width.url + ">");
            var mystring = ""
            for(var count=0; count<4; count=count+1){
                mystring += "<div class=\"pictures\" >  <img src= "+ response.data[count].images.fixed_width.url + "></div>";
            }
            $(".gallery").html(mystring);
            
//mystring.forEach(function(pictures){
 //   $("#").append<)
    
    
}});
   
});





        
    

  


 //$("#search-button").click(function(){
  //   $.ajax({
 //        url:  "https://api.giphy.com/v1/gifs/search?q=cat&rating=pg&api_key=dc6zaTOxFJmzC",
  //   method: "GET",
//      success: function(response){
 //           console.log(response);
 //          $("body").append("<img src=" + response.data[1].images.fixed_width.url + ">");
            
//});
  