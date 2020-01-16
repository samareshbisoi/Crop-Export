
function view_all_m_orders() {
	var user_email = $.session.get('session_id');
	var url=BaseURL+"list_medical_orders.php?email="+user_email ; //alert(url);
	//$("#movie_list").html("");
		$.getJSON(url,function(result){ //alert(result);
					//$("#loader").hide();	
				var str = '';	
			console.log(result);
	        $.each(result, function(i, field){
				
	        	var p_image=field.p_image;
				var m_o_status=field.m_o_status;
				var comment=field.comment;
				var added_date	= field.added_date ;
				var m_o_id=field.m_o_id;
				/*var total_marks=field.total_marks;*/
				
				$("#listview").append('<li class="table_row"><div class="table_section_14">' + added_date + '</div><div class="table_section_14">' + m_o_id + '</div><div class="table_section_14">' + m_o_status + '</div><div class="table_section_14"><a href="#">Details</a></div></li>');
	          
				
	        });
			
			 //$("#list_subject").html(str);
			 //$(showID).append('<div class="clearleft"></div>');
    	});
}



$(document).ready(function()
		{
		// Using GetJSON
		view_all_m_orders();
		
	});