// $('#register-submit').on('click', function(event) {
//     event.preventDefault();
//
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//     var emailValue = $('#email').val();
//
//     $.ajax({
//         url: '/register',
//         type: 'POST',
//         datatype: 'JSON',
//         data: {
//             email: emailValue
//         },
//         success: function(data) {
//             console.log(data);
//         },
//         error: function(error) {
//             console.log(error);
//         }
//     });
// });

function usernameValidatorCallback(event){
    var xhr = event.target;

    if (xhr.readyState !== 4) {
        return;
    }

    var json = JSON.parse(xhr.response);

    if (json.available) {
        $('#username').attr('aria-describedby', 'inputError2Status');

        var html = '<span class="glyphicon glyphicon-ok form-control-feedback usernameValidatorCallback" aria-hidden="true"></span><span id="inputSuccess2Status" class="sr-only usernameValidatorCallback">(success)</span>';

        $('.usernameValidatorCallback').remove();
        $('#username').parent().removeClass('has-success has-error has-warning has-feedback');
        $('#username').parent().addClass('has-success has-feedback');
        $('#username').after(html);
        $('#form_submit').attr('disabled', false);
    } else {
        $('#username').attr('aria-describedby', 'inputError2Status');

        var html = '<span class="glyphicon glyphicon-remove form-control-feedback usernameValidatorCallback" aria-hidden="true"></span><span id="inputError2Status" class="sr-only usernameValidatorCallback">(error)</span>';

        $('.usernameValidatorCallback').remove();
        $('#username').parent().removeClass('has-success has-error has-warning has-feedback');
        $('#username').parent().addClass('has-error has-feedback');
        $('#username').after(html);
        $('#form_submit').attr('disabled', true);
    }
}

function beforeValidate(validator) {
    $('#username').attr('aria-describedby', 'inputError2Status');
    var html = '<span class="glyphicon glyphicon-warning-sign form-control-feedback usernameValidatorCallback" aria-hidden="true"></span><span id="inputError2Status" class="sr-only usernameValidatorCallback">(warning)</span>';

    $('.usernameValidatorCallback').remove();
    $('#username').parent().removeClass('has-success has-error has-warning has-feedback');
    $('#username').parent().addClass('has-warning has-feedback');
    $('#username').after(html);
    $('#form_submit').attr('disabled', true);
}

