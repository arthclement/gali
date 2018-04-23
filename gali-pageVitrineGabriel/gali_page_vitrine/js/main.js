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

    /** *************************Form Checking **************************************************** 
     * ***************************************************************************************
     * ***********************************************************************
     */

    /** *****************LOGIN*********** */


    /* ***username** */
    // FOCUS  action 
    $("#username").on("focus", function() {
        console.log("focus in passed username");
        $("#usernameCheck").css("display", "block");
    })

    // BLUR out action hide the block

    $("#username").on("keyup", function() {
        console.log("focus out passed username");
        $("#usernameCheck").css("display", "none");
    })



    /*  ***Log In password**** */
    // FOCUS action 
    $("#Loginpassword").on("focus", function() {
        console.log("focus in passed password log in");
        $("#LogPasswordCheck").css("display", "block");
    })

    //FOCUS out action hide the block

    $("#Loginpassword").on("keyup", function() {
        console.log("focus out passed password log in");
        $("#LogPasswordCheck").css("display", "none");
    })






    /** *************REGISTRATION FORM ***************** */



    /****** INPUT FOCUS****************************** */

    /*****FIRSTNAME***  */
    //FOCUS IN
    $("#firstname").on("focus", function() {
        console.log("focus in passed firstname registration");
        $("#firstnameCheck").css("display", "block");
    })

    //FOCUS OUT 
    $("#firstname").on("keyup", function() {
        console.log("focus out passed firstname registration");
        $("#firstnameCheck").css("display", "none");
    })


    /*****LASTNAME***  */
    //FOCUS IN
    $("#lastname").on("focus", function() {
        console.log("focus in passed lastname registration");
        $("#lastnameCheck").css("display", "block");
    })

    //FOCUS OUT 
    $("#lastname").on("keyup", function() {
        console.log("focus out passed lastname registration");
        $("#lastnameCheck").css("display", "none");
    })



    /*****EMAIL************************* */
    //FOCUS IN
    $("#email").on("focus", function() {
        console.log("focus in passed email registration");
        $("#emailCheck").css("display", "block");
    })

    //FOCUS OUT 
    $("#email").on("keyup", function() {
        console.log("focus out passed email registration");
        $("#emailCheck").css("display", "none");
    })




    /** ***FIRST PASSWORD***** */
    //FOCUS IN
    $("#passwordRegister").on("focus", function() {

            $("#RegistrationpassCheck").css("display", "block");
        })
        //FOCUS OUT 
    $("#passwordRegister").on("keyup", checkPswd);

    function checkPswd() {
        var password = $("#passwordRegister").val();

        if (password.length > 8) {
            $("#length").addClass("valid").removeClass("invalid");
        } else {
            $("#length").addClass("invalid").removeClass("valid");
        }
        //	.match(/[A-z]/) 
        if (password.match(/[A-z]/)) {
            $("#letter").addClass("valid").removeClass("invalid");
        } else {
            $("#letter").addClass("invalid").removeClass("valid");
        }
        //	.match(/[A-Z]/) uppercase
        if (password.match(/[A-Z]/)) {
            $("#capital").addClass("valid").removeClass("invalid");
        } else {
            $("#capital").addClass("invalid").removeClass("valid");
        }
        //	.match(/\d/) numbers
        if (password.match(/\d/)) {
            $("#number").addClass("valid").removeClass("invalid");
        } else {
            $("#number").addClass("invalid").removeClass("valid");
        }

    }



});