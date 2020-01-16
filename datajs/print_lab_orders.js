
function view_all_lab_test() {
	var user_email = localStorage.session_id;
	var url=BaseURL+"list_lab_test_orders.php?email="+user_email ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var p_image=field.p_image;
				var lab_status=field.lab_status;
				var comment=field.comment;
				var added_date	= field.added_date ;
				var lab_test_id=field.lab_test_id;
				var lab_venue=field.lab_venue;
				var lab_timing=field.lab_timing;
				
				/*var total_marks=field.total_marks;*/
				
				$("#listview").append('<li class="table_row"><div class="table_section_15" style="color:#000000;">' + added_date + '</div><div class="table_section_15" style="color:#000000;">' + lab_test_id + '</div><div class="table_section_15" style="color:#000000;">' + lab_status + '</div><div class="table_section_15" style="color:#000000;">' + lab_venue + '</div><div class="table_section_15" style="color:#000000;">' + lab_timing + '</div></li>');
	          
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		view_all_lab_test();
		
	});