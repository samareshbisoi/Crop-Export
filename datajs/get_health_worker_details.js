
function get_all_details() {
	var health_worker_id = $.session.get('session_id');
	var url=BaseURL+"get_health_wotker_details.php?health_worker_id="+health_worker_id ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var desig_name='Designation - ' + field.desig_name;
				var health_worker_name='Name - ' + field.health_worker_name;
				var district_name='District - ' + field.district_name;
				var health_worker_gender='Gender - ' + field.health_worker_gender;
				/*var test_type=field.test_type;
				var total_marks=field.total_marks;*/
				$("#h_name").html(health_worker_name);
	            $("#h_desig").html(desig_name);
				$("#h_district").html(district_name);
				$("#h_gender").html(health_worker_gender);
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		get_all_details();
		
	});