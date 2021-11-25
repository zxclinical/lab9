$(function(){
    var $loginForm = $("#login");
    if($loginForm.length){
        $loginForm.validate({
            rules:{
                username:{
                    required: true
                },
                password:{
                    required: true
                },
                userName:{
                    required: true
                },
                contactNumber:{
                    required: true
                }
            },
            messages:{
                username:{
                    required: 'required'
                },
                password:{
                    required: 'required'
                },
                userName:{
                    required: 'required'
                },
                contactNumber:{
                    required: 'required'
                }
            }
        })
    }
});