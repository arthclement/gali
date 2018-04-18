

// smooth scroll
$('a[href^="#"]').on("click", function(){
  
    //get the href value
    var theHrefValue = $(this).attr("href");
    //console.log(theHrefValue);
    //problem with only #
    if(theHrefValue != "#"){
      //try to find an element with this ID
      var element = $(theHrefValue);
      if(element.length >0){ //IF I FOUND SOMETHING
        //look for an element with the right id
        var offsetTop = element.offset().top-185;
        //animation
        $("body, html").animate({
          "scrollTop": offsetTop
        },1000);
      }
    }
  });