//jQuery Ajax form submission

$(function() {

  //add event listener for form submit
  $('form').unbind().submit(function(e) {

    //show button loader
    $('#submit').hide();
    $('.loader').show();

    //prevent default form submission
    e.preventDefault();
    
      //make ajax request
      $.ajax({
          type: 'POST',
          url: 'subscribe.php',
          data: $(this).serialize(),
          success: (data) => {

            //hide button loader on successful request
            $('.loader').hide();
            $('#submit').show()

            //reset email input value
            document.querySelector('#email').value = '';
            //display success alert with message from php echo
            swal("Opt in successful!", `${data}`, "success")
          },
          error: (err) => {

            //hide loader 
            $('.loader').hide();
            $('#submit').show()
            document.querySelector('#email').value = '';

            //log php error message on console
            console.log(err);

            //display error alert
            swal("Opps an error occured!", "We couldnt process your request, please try again later!", "error")
          }
      })
  }); 
})


// get user device type

const getDeviceType = () => {

  //store user agent to variable
  const ua = navigator.userAgent;

  //regex testing to get exact user device type
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



//create browser cookie for user device type 

$(document).ready(function () {
  createCookie("device", getDeviceType(), "10");
});

//set function to expire cookie

function createCookie(name, value, days) {
  let expires;
  
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