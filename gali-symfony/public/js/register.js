function usernameValidatorCallback(event){
    var xhr = event.target;
    var html;

    if (xhr.readyState !== 4) {
        return;
    }

    var json = JSON.parse(xhr.response);

    if (json.available) {
        $('#username-reg').attr('aria-describedby', 'inputError2Status');

        html = '<span class="glyphicon glyphicon-ok form-control-feedback username-regValidatorCallback" aria-hidden="true"></span><span id="inputSuccess2Status" class="sr-only username-regValidatorCallback">(success)</span>';

        $('.username-regValidatorCallback').remove();
        $('#username-reg').parent().removeClass('has-success has-error has-warning has-feedback');
        $('#username-reg').parent().addClass('has-success has-feedback');
        $('#username-reg').after(html);
        $('#form_submit').attr('disabled', false);
    } else {
        $('#username-reg').attr('aria-describedby', 'inputError2Status');

        html = '<span class="glyphicon glyphicon-remove form-control-feedback username-regValidatorCallback" aria-hidden="true"></span><span id="inputError2Status" class="sr-only username-regValidatorCallback">(error)</span>';

        $('.username-regValidatorCallback').remove();
        $('#username-reg').parent().removeClass('has-success has-error has-warning has-feedback');
        $('#username-reg').parent().addClass('has-error has-feedback');
        $('#username-reg').after(html);
        $('#form_submit').attr('disabled', true);
    }
}

function beforeValidate(validator) {
    $('#username-reg').attr('aria-describedby', 'inputError2Status');
    var html = '<span class="glyphicon glyphicon-warning-sign form-control-feedback username-regValidatorCallback" aria-hidden="true"></span><span id="inputError2Status" class="sr-only username-regValidatorCallback">(warning)</span>';

    $('.username-regValidatorCallback').remove();
    $('#username-reg').parent().removeClass('has-success has-error has-warning has-feedback');
    $('#username-reg').parent().addClass('has-warning has-feedback');
    $('#username-reg').after(html);
    $('#form_submit').attr('disabled', true);
}

