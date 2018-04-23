var debug = false;
jQuery(document).ready(function() {
    console.log("ok");



    //for the navigation
    // smooth scroll
    $('a[href^="#"]').on("click", function() {

        //get the href value
        var theHrefValue = $(this).attr("href");
        //console.log(theHrefValue);
        //problem with only #
        if (theHrefValue != "#") {
            //try to find an element with this ID
            var element = $(theHrefValue);
            if (element.length > 0) { //IF I FOUND SOMETHING
                //look for an element with the right id
                var offsetTop = element.offset().top - 185;
                //animation
                $("body, html").animate({
                    "scrollTop": offsetTop
                }, 1000);
            }
        }
    });

    /** *************************Form Checking ************************************* */
    /** LOGIN */
    /* username */
    //focus action + submit ??
    $("#username").on("focus", function() {
        console.log("focus in passed username");
        $("#usernameCheck").css("display", "block");
    })

    //focus out action hide the block
    // maybe when we press on the keyboard ??
    $("#username").on("keyup", function() {
        console.log("focus out passed username");
        $("#usernameCheck").css("display", "none");
    })

    /*  Log In password */
    //focus action + submit ??
    $("#Loginpassword").on("focus", function() {
        console.log("focus in passed password log in");
        $("#LogPasswordCheck").css("display", "block");
    })

    //focus out action hide the block
    // maybe when we press on the keyboard ??
    $("#Loginpassword").on("keyup", function() {
        console.log("focus out passed password log in");
        $("#LogPasswordCheck").css("display", "none");
    })

    /** Form Login validation for the connexion */
    $("#loginForm").on("submit", function(event) {
        event.preventDefault();
        //check the criteria of the inputs
        if ($("#username").val().length < 20 && $("#Loginpassword").val().length < 8) {

            console.log("username criteria confirmation needed");
            console.log("Login password criteria needed");

            var username = $("#username").val();
            var passwordLogin = $("#Loginpassword").val();

            alert("Thank you " + username + "your connexion succeeded");
        }
    })











});