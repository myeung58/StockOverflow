$(document).ready(function() {
  $('.question-form').hide();
  $('.show-question-form').click(function() {
    $('.question-form').toggle('slow');
  })

  $('.question-form').on("submit", function(event) {
    event.preventDefault();
    var request = $.ajax({url: $(this).attr("action"),
                          type: "POST",
                          data: $(this).serialize(),
                          context: this
    })
    request.done(function(data) {
      location.reload();
    })
  })
})
