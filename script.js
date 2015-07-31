$(function() {
  $('#miFormulariodeRegistro').submit(function(event) {
    event.preventDefault();

    var formEl = $('#miFormulariodeRegistro');
    var submitButton = $('input[type=submit]', formEl);

    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      accept: {
        javascript: 'application/javascript'
      },
      data: formEl.serialize(),
      beforeSend: function() {
        submitButton.prop('disabled', 'disabled');
        alert('Antes de enviar');
      }
    }).done(function(data) {
      submitButton.prop('disabled', false);

      $.ajax({
      type: 'GET',
      url: 'https://formkeep.com/api/v1/forms/cbe4dde6172b/submissions.json?api_token=5db8c5bee7690f51bfe8453c8fbd7111',
      accept: {
        javascript: 'application/javascript'
      }
    }).done(function(data) {
      console.log(data);
    });

    

    });
  });
});