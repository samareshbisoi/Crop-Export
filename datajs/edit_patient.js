
function open_divA(val) {
	//alert("function called");
	if(val == 'yes') { //alert(document.getElementById('evacuated_yes').checked); document.getElementById('evacuated_yes').checked
			$("#label_evacuated_if_yes").show();
			  // radio button is checked
			// document.getElementById('label_evacuated_if_yes').style.visibility = "visible";
			  //document.getElementById('frmDiv_evacuated_if_yes').style.visibility = "visible";
			} else {
				$("#label_evacuated_if_yes").hide();
				 //document.getElementById('label_evacuated_if_yes').style.visibility = "hidden";
			 // document.getElementById('frmDiv_evacuated_if_yes').style.visibility = "hidden";
			}
	
}

function open_divMM(val) {
	
	if(val == 'yes') { //document.getElementById('metarnal_morbidity_yes').checked
			  // radio button is checked
			  $("#metarnal_morbidity_if_yes").show();
			 //document.getElementById('metarnal_morbidity_if_yes').style.visibility = "visible";
			} else {
				// document.getElementById('metarnal_morbidity_if_yes').style.visibility = "hidden";
				 $("#metarnal_morbidity_if_yes").hide();
			}
	
}

function openTB(val) {
	
	if(val == "Institution") {
			  // radio button is checked
			 document.getElementById('frmDiv_place_if_yes').style.visibility = "visible";
			} else {
				 document.getElementById('frmDiv_place_if_yes').style.visibility = "hidden";
			}
	
}

function submit_data() {
 
 
        //$("#insert").click(function(){
						
			var health_worker_id = $.session.get('session_id');			
						
            var mothers_name=$("#mothers_name").val();
			var patient_dt=$("#patient_dt").val();
            var preg_gravida=$("#preg_gravida").val();
			var preg_living=$("#preg_living").val();
			
			var preg_para=$("#preg_para").val();
			var preg_abortion=$("#preg_abortion").val();
            var anc_visit=$("#anc_visit").val();
			
			var patient_id = $("#patient_id").val();
			
			/*var ans_1 = "";
			var ans_2 = "";
			var ans_3 = "";
			var ans_4 = "";
			var ans_5 = "";*/
			
			if($.trim(mothers_name).length == 0) {
				alert("Please enter name.");
				return false;
			}
			
			if($.trim(patient_dt).length == 0) {
				alert("Please enter date.");
				return false;
			}
			
			//var eval_q = document.forms['eval_frm'] ;
			var prolonged_labour = "";
			if(document.getElementById('prolonged_labour_yes').checked) {
			  // radio button is checked
			  var prolonged_labour = "yes";
			}
			
			if(document.getElementById('prolonged_labour_no').checked) {
			  // radio button is checked
			  var prolonged_labour = "no";
			}
			
			var evacuated = "";
			
			if(document.getElementById('evacuated_yes').checked) {
			  // radio button is checked
			  var evacuated = "yes";
			}
			
			if(document.getElementById('evacuated_no').checked) {
			  // radio button is checked
			  var evacuated = "no";
			}
			
			var if_yes_evacuated=$("#if_yes_evacuated").val();
			var no_of_moves=$("#no_of_moves").val();
			var place_of_delivery=$("#place_of_delivery").val();
			
			var if_institution = "";
			
			if(document.getElementById('if_institution_g').checked) {
			  // radio button is checked
			  var if_institution = "Govt.";
			}
			
			if(document.getElementById('if_institution_p').checked) {
			  // radio button is checked
			  var if_institution = "Private";
			}
			
			var type_of_delivery=$("#type_of_delivery").val();
			
			var no_of_pnc_visit=$("#no_of_pnc_visit").val();
			
			 var fistula_cases_identified = "";
			
			if(document.getElementById('fistula_cases_identified_yes').checked) {
			  // radio button is checked
			  var fistula_cases_identified = "yes";
			}
			
			if(document.getElementById('fistula_cases_identified_no').checked) {
			  // radio button is checked
			  var fistula_cases_identified = "no";
			}
			
			var fistula_case_reffered = "";
			
			if(document.getElementById('fistula_case_reffered_yes').checked) {
			  // radio button is checked
			  var fistula_case_reffered = "yes";
			}
			
			if(document.getElementById('fistula_case_reffered_no').checked) {
			  // radio button is checked
			  var fistula_case_reffered = "no";
			}
			
			 var psychological = "";
			
			if(document.getElementById('psychological_yes').checked) {
			  // radio button is checked
			  var psychological = "yes";
			}
			
			if(document.getElementById('psychological_no').checked) {
			  // radio button is checked
			  var psychological = "no";
			}
			
			var metarnal_morbidity = "";
			
			if(document.getElementById('metarnal_morbidity_yes').checked) {
			  // radio button is checked
			  var metarnal_morbidity = "yes";
			}
			
			if(document.getElementById('metarnal_morbidity_no').checked) {
			  // radio button is checked
			  var metarnal_morbidity = "no";
			}
			
			var if_yes_problem=$("#if_yes_problem").val();
			
			var metarnal_death = "";
			//alert(metarnal_morbidity);
			if(document.getElementById('metarnal_death_yes').checked) {
			  // radio button is checked
			  var metarnal_death = "yes";
			}
			
			if(document.getElementById('metarnal_death_no').checked) {
			  // radio button is checked
			  var metarnal_death = "no";
			}
			
			var txt = "";
					
            var dataString="patient_id="+patient_id+"&health_worker_id="+health_worker_id+"&mothers_name="+mothers_name+"&patient_dt="+patient_dt+"&preg_gravida="+preg_gravida+"&preg_living="+preg_living+"&preg_para="+preg_para+"&preg_abortion="+preg_abortion+"&anc_visit="+anc_visit+"&prolonged_labour="+prolonged_labour+"&evacuated="+evacuated+"&if_yes_evacuated="+if_yes_evacuated+"&no_of_moves="+no_of_moves+"&place_of_delivery="+place_of_delivery+"&if_institution="+if_institution+"&type_of_delivery="+type_of_delivery+"&no_of_pnc_visit="+no_of_pnc_visit+"&fistula_cases_identified="+fistula_cases_identified+"&fistula_case_reffered="+fistula_case_reffered+"&psychological="+psychological+"&metarnal_morbidity="+metarnal_morbidity+"&if_yes_problem="+if_yes_problem+"&metarnal_death="+metarnal_death+"&mode=save";
			//alert(BaseURL+"edit_patient.php?"+dataString); //return false ;
			
            if($.trim(mothers_name).length>0  )
            {
                $.ajax({
                    type: "POST",
                    url: BaseURL+"edit_patient.php?",
                    //url:"http://localhost/phonegap/database/insert.php",
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#submit22").val('Connecting...');},
                    success: function(data){
                        if(data=="ok")
                        {
                            alert('Your patient data is saved');
							
							
							$("#submit").val('submit');
							
							$(location).attr('href', 'anm-dashboard.html');
							
                            /*
							$("#uni_reg_no").val('') ;
							$("#password").val('') ;
							$("#email").val('') ;
							$(location).attr('href', 'student-login.html');*/
                        }
                        else if(data=="error")
                        {
                            alert("Invalid Data...Please try again");
							$("#submit").val('submit');
							/*$("#username").val('') ;
							$("#password").val('') ;*/
                        } 
						 /*else if(data=="no")
                        {
                            alert("Sorry Registration No. does not exists in our database.");
							$("#register").val('submit');
							$("#uni_reg_no").val('') ;
							$("#password").val('') ;
							$("#email").val('') ;
                        }*/
						
                    }
                });
            } else {
			 alert("Please fill the form properly");
			} return false;
			
            //});
    
 }
 
 
 	$(document).ready(function()
		{
		// Using GetJSON
		//var url="http://localhost/phonegap/database/json.php";
		
		var str = window.location.href;
		var start = str.lastIndexOf("?") + 1;
		var end = str.length;
		//alert(str.substring(start,end));	
		var str = str.replace("#tab2", "");
		var a_id = str.substring(start,end) ;
		var url = "";
		//if($.isNumeric(a_id)){
		//alert(a_id);	
		var health_worker_id = $.session.get('session_id');
			url=BaseURL+"get_patient_details.php?patient_id="+a_id ;
			//$("#heading").html('Article');
		//}
		
		
		//alert(url);
		//var url=BaseURL+"article_data.php?cat="+art_cat+"";
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();							
			console.log(result);
	        $.each(result, function(i, field){
									
				//alert(field.mothers_name);
	        	$("#mothers_name").val(field.mothers_name) ;
				$("#patient_dt").val(field.patient_dt) ;
				//alert(field.preg_gravida);
				$("#preg_gravida").val(field.preg_gravida) ;
				$("#preg_living").val(field.preg_living) ;
				$("#preg_para").val(field.preg_para) ;
				$("#preg_abortion").val(field.preg_abortion) ;
				
				$("#anc_visit").val(field.anc_visit) ;
				//$("#prolonged_labour").val(field.prolonged_labour) ;
				
				if(field.prolonged_labour == 'yes') {
					$("#prolonged_labour_yes").attr('checked', true);	
				} else if(field.prolonged_labour == 'no') {
					$("#prolonged_labour_no").attr('checked', true);
				}
				
				if(field.evacuated == 'yes') {
					$("#evacuated_yes").attr('checked', true);
					$("#label_evacuated_if_yes").show();
				} else if(field.evacuated == 'no') {
					$("#evacuated_no").attr('checked', true);
					$("#label_evacuated_if_yes").hide();
				}
				
				
				/*$("#evacuated").val(field.evacuated) ;*/
				$("#if_yes_evacuated").val(field.if_yes_evacuated) ;
				
				$("#no_of_moves").val(field.no_of_moves) ;
				$("#place_of_delivery").val(field.place_of_delivery) ;
				
				if(field.place_of_delivery == "Institution") { //alert(field.place_of_delivery);
					$("#frmDiv_place_if_yes").show();
					openTB(field.place_of_delivery);
				}
				
				//$("#if_institution").val(field.if_institution) ;
				
				if(field.if_institution == 'Govt.') {
					$("#if_institution_g").attr('checked', true);	
				} else if(field.if_institution == 'Private') {
					$("#if_institution_p").attr('checked', true);
				}
				
				$("#type_of_delivery").val(field.type_of_delivery) ;
				
				$("#no_of_pnc_visit").val(field.no_of_pnc_visit) ;
				
				$("#fistula_cases_identified").val(field.fistula_cases_identified) ;
				
				if(field.fistula_cases_identified == 'yes') {
					$("#fistula_cases_identified_yes").attr('checked', true);
				} else if(field.fistula_cases_identified == 'no') {
					$("#fistula_cases_identified_no").attr('checked', true);
				}
				
				if(field.fistula_case_reffered == 'yes') {
					$("#fistula_case_reffered_yes").attr('checked', true);
				} else if(field.fistula_case_reffered == 'no') {
					$("#fistula_case_reffered_no").attr('checked', true);
				}
				
				if(field.psychological == 'yes') {
					$("#psychological_yes").attr('checked', true);
				} else if(field.psychological == 'no') {
					$("#psychological_no").attr('checked', true);
				}
				
				//$("#fistula_case_reffered").val(field.fistula_case_reffered) ;
				//$("#psychological").val(field.psychological) ;
				
				if(field.metarnal_morbidity == 'yes') {
					$("#metarnal_morbidity_yes").attr('checked', true);
					$("#if_yes_problem").show();
				} else if(field.metarnal_morbidity == 'no') {
					$("#metarnal_morbidity_no").attr('checked', true);
				}
				
				//$("#metarnal_morbidity").val(field.metarnal_morbidity) ;
				$("#if_yes_problem").val(field.if_yes_problem) ;
				
				if(field.metarnal_death == 'yes') {
					$("#metarnal_death_yes").attr('checked', true);
				} else if(field.metarnal_death == 'no') {
					$("#metarnal_death_no").attr('checked', true);
				}
				
				//$("#metarnal_death").val(field.metarnal_death) ;
				
				$("#patient_id").val(field.patient_id) ;
				
				var patient_dt=field.patient_dt;
				var type_of_delivery=field.type_of_delivery;
				var patient_id=field.patient_id;
				
				
				
				/* $("#listview").append("<li class='swipeout'><div class='swipeout-content item-content'><div class='post_entry'><div class='post_thumb'><img src='"+img_value+"' width='200' alt='' title='' /></div><div class='post_details'><div class='post_category'><a href='article-details.html?"+ article_id + "'>"+ article_title + "</a></div><h2><a href='article-details.html?"+ article_id + "'>"+ article_body +"</a></h2>By Fresh Box Office on "+post_date+"</div><div class='post_swipe'><img src='images/swipe_more.png' alt='' title='' /></div></div></div></li>");*/
				
	        });
    	});
		
		
	});