
function view_all_doc_appo() {
	var user_email = localStorage.session_id;
	var url=BaseURL+"list_doc_appo_orders.php?email="+user_email ; alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	//var p_image=field.p_image;
				var appo_status=field.appo_status;
				var message=field.message;
				var added_date	= field.added_date ;
				var doc_app_id=field.doc_app_id;
				var venue=field.venue;
				var timing=field.timing;
				
				/*var total_marks=field.total_marks;*/
				
				$("#listview").append('<li class="table_row"><div class="table_section_15" style="color:#000000;">' + added_date + '</div><div class="table_section_15" style="color:#000000;">' + doc_app_id + '</div><div class="table_section_15" style="color:#000000;">' + appo_status + '</div><div class="table_section_15" style="color:#000000;">' + venue + '</div><div class="table_section_15" style="color:#000000;">' + timing + '</div></li>');
	          
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		view_all_doc_appo();
		
	});