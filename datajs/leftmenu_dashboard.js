function show_tab(tone,ttwo,bone,btwo) {
	//alert(tone);
	$(ttwo).hide();	
	$(tone).show();	
	
	//alert();
	$(btwo).removeClass('active');
	//$(tone).removeClass('active');
	$(bone).addClass('active');
}

// <li><a href="faculty-registermynewmobile.html" class="close-panel"><img src="images/icons/red/mobile.png" alt="" title="" /><span>Register My New Mobile</span></a></li>

$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		var menu = '<li><a href="anm-dashboard.html" class="close-panel"><img src="images/icons/red/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="anm-add-patient.html" class="close-panel"><img src="images/icons/red/types.png" alt="" title="" /><span>Add Patient</span></a></li><li><a href="open-cases.html" class="close-panel"><img src="images/icons/red/symptoms.png" alt="" title="" /><span>Open Cases</span></a></li><li><a href="delivery-report.html" class="close-panel"><img src="images/icons/red/epidemiology.png" alt="" title="" /><span>Delivery Report</span></a></li><li><a href="index.html" class="close-panel"><img src="images/icons/red/lock.png" alt="" title="" /><span>Log Out</span></a></li><li><a href="contact.html" class="close-panel"><img src="images/icons/red/contact.png" alt="" title="" /><span>Contact</span></a></li>';
		
		$("#sidemenu").append(menu);
		
		/*var RIGHTmenu = '<li><a href="#" class="close-panel"><img src="images/icons/red/settings.png" alt="" title="" /><span>Account Settings</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/briefcase.png" alt="" title="" /><span>My Account</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/message.png" alt="" title="" /><span>Notice</span><strong>12</strong></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/love.png" alt="" title="" /><span>Class</span><strong>5</strong></a></li><li><a href="logout.html" class="close-panel"><img src="images/icons/red/lock.png" alt="" title="" /><span>Logout</span></a></li>';
		
		$("#rightmenu").append(RIGHTmenu);*/
		
	});