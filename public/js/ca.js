var $form = $('form#ca-form'),
    url = 'https://script.google.com/macros/s/AKfycbyGpF2jRQHy4arH5S1KHxelMPtOhWsW8piSW3u8qNWdhWGHvow/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    alert("Thanks for joining us! We will contact you soon!"),
    $('#myModalNorm').modal('hide'),
    

  );
})
