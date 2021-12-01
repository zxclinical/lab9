$(function () {
    var $loginForm = $("#login");
    if ($loginForm.length) {
        $loginForm.validate({
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                },
                userName: {
                    required: true
                },
                contactNumber: {
                    required: true
                }
            },
            messages: {
                username: {
                    required: 'required'
                },
                password: {
                    required: 'required'
                },
                userName: {
                    required: 'required'
                },
                contactNumber: {
                    required: 'required'
                }
            }
        })
    }
});


$('.guide').click(function(){
    $('.filler-text').slideDown('slow');
});

$('.prev-user').click(function(){
    anime({
        targets: '.prev-user',
        left: '240px',
        backgroundColor: '#fef',
        borderRadius: ['0%', '20%'],
        easing: 'easeInOutQuad'
      });
});