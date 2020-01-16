function submit_data() {
 
 
        //$("#insert").click(function(){
            var email=$("#email").val();
            var password=$("#password").val();
			
					
            var dataString="email="+email+"&password="+password+"&mode=login";
			//alert(BaseURL+"login.php?"+dataString);
            if($.trim(email).length>0 & $.trim(password).length>0 )
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"login.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#login").val('Connecting...');},
                    success: function(data){
                        if(data=="authorized")
                        {
                            
                            $("#login").val('submit');
							$("#email").val('') ;
							$("#password").val('') ;
							//$.session.set('session_id', email);
							//alert($.session.get('session_id'));
							localStorage.setItem("session_id", email); //alert(localStorage.session_id);
							$(location).attr('href', 'welcome.html');
                        }
                        else if(data=="auth_failed")
                        {
                            alert("Invalid Login...Please try again");
							$("#login").val('submit');
							$("#email").val('') ;
							$("#password").val('') ;
                        } 
						
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }