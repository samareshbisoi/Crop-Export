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
		var menu = '<li><a href="index.html" class="close-panel"><img src="images/icons/red/home.png" alt="" title="" /><span>Home</span></a></li><li><a href="welcome.html" class="close-panel"><img src="images/icons/red/prevention.png" alt="" title="" /><span>Prevention of Obstetric Fistula</span></a></li><li><a href="front-birth-preparedness-complication-readiness.html" class="close-panel"><img src="images/icons/red/preparedness.png" alt="" title="" /><span>Birth Preparedness & Complication Readiness (BPCR)</span></a></li><li><a href="front-community-kangaroo-mother-care.html" class="close-panel"><img src="images/icons/red/community.png" alt="" title="" /><span>Community Kangaroo Mother Care (CKMC)</span></a></li><li><a href="front-home-based-new-born-care.html" class="close-panel"><img src="images/icons/red/based.png" alt="" title="" /><span>Home Based New Born Care (HBNC)</span></a></li><li><a href="front-breast-feeding-support.html" class="close-panel"><img src="images/icons/red/breast.png" alt="" title="" /><span>Breast Feeding Support</span></a></li><li><a href="front-home-based-postnatal-care.html" class="close-panel"><img src="images/icons/red/postnatal.png" alt="" title="" /><span>Home Based Postnatal Care</span></a></li><li><a href="front-management-of-obstetric-emergency.html" class="close-panel"><img src="images/icons/red/emergency.png" alt="" title="" /><span>Management of Obstetric Emergency</span></a></li><li><a href="front-integrated-menopausal-management.html" class="close-panel"><img src="images/icons/red/integrated.png" alt="" title="" /><span>Integrated Menopausal Management</span></a></li>';
		
		$("#sidemenu").append(menu);
		
		/*var RIGHTmenu = '<li><a href="#" class="close-panel"><img src="images/icons/red/settings.png" alt="" title="" /><span>Account Settings</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/briefcase.png" alt="" title="" /><span>My Account</span></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/message.png" alt="" title="" /><span>Notice</span><strong>12</strong></a></li><li><a href="#" class="close-panel"><img src="images/icons/red/love.png" alt="" title="" /><span>Class</span><strong>5</strong></a></li><li><a href="logout.html" class="close-panel"><img src="images/icons/red/lock.png" alt="" title="" /><span>Logout</span></a></li>';
		
		$("#rightmenu").append(RIGHTmenu);*/
		
	});