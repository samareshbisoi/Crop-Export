
 function register_data() {
 
 
        //$("#insert").click(function(){
            var name=$("#full_name").val();
            var email=$("#email").val();
            var pass=$("#pass").val();
			var phone = $("#phone").val();
			
			var atpos = email.indexOf("@");
			var dotpos = email.lastIndexOf(".");
			if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
				alert("Not a valid e-mail address");
				return false;
			}
			
            var dataString="name="+name+"&email="+email+"&pass="+pass+"&phone="+phone+"&mode=insert";
			//alert(BaseURL+"register.php?"+dataString);
            if($.trim(name).length>0 & $.trim(pass).length>0 & $.trim(email).length>0)
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"register.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#insert").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert("Thanks for your interest, we will get back to you very soon.");
							$(location).attr('href', 'index.html');
                           /* $("#insert").val('SIGN UP');
							$("#full_name").val('') ;
							$("#email").val('') ;
							$("#pass").val('') ;
							$("#phone").val('') ;*/
                        }
                        else if(data=="error")
                        {
                            alert("error");
							 $("#insert").val('SIGN UP');
							$("#full_name").val('') ;
							$("#email").val('') ;
							$("#pass").val('') ;
							$("#phone").val('') ;
                        } 
						 else if(data=="duplicate")
                        {
                            alert("You have already registered with this email : "+email);
							 $("#insert").val('SIGN UP');
							$("#full_name").val('') ;
							$("#email").val('') ;
							$("#pass").val('') ;
							$("#phone").val('') ;
                        }
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }
