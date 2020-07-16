//prevent form redirect on submit

$(function() {
  $('form').unbind().submit(function(e) {

    $('#submit').hide();
    $('.loader').show();

    e.preventDefault();
    console.log(document.querySelector('#email').value)
    
      $.ajax({
          type: 'POST',
          url: 'subscribe.php',
          data: $(this).serialize(),
          success: () => {
            $('.loader').hide();
            $('#submit').show()
            document.querySelector('#email').value = '';
            swal("Opt in successful!", "Your email is now in our waiting list!", "success")
          },
          error: () => {
            $('.loader').hide();
            $('#submit').show()
            document.querySelector('#email').value = '';
            swal("Opps an error occured!", "We couldnt process your request, please try again later!", "error")
          }
      })
  }); 
})


// get user device type

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};



//create cookie for user device

$(document).ready(function () {
  createCookie("device", getDeviceType(), "10");
});

//expire cookie

function createCookie(name, value, days) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  else {
    expires = "";
  }
  document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}