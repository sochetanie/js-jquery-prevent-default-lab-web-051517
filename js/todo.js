$(document).ready(function(){
  // call functions here
  submitForm()
});

// define functions here

function submitForm() {
    $('form').on('submit', function(e) {
        e.preventDefault()
        let input = $('#item').val()
        $('#item').val('')
        $('ol').append(`<li>${input}</li>`)
    })
} 