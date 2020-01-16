function save_data() {
	const url = BaseURL + 'doc_appo.php'; //alert(url);
	const form = document.querySelector('form');
	
	
	
	//const files = document.querySelector('[type=file]').files;
    const formData = new FormData();

    /*for (let i = 0; i < files.length; i++) {
        let file = files[i];

        formData.append('files[]', file);
    }*/

/*add form data*/

	var patient_name=$("#patient_name").val();
	formData.append('patient_name', patient_name); //alert(patient_name);
	
	var age=$("#age").val();
	formData.append('age', age);
	
	var message=$("#message").val();
	formData.append('message', message);
	
	if(document.getElementById('g_m').checked) {
			  // radio button is checked
			  var gender = "male";
			}
	if(document.getElementById('g_f').checked) {
			  // radio button is checked
			  var gender = "female";
			}
	if(document.getElementById('g_o').checked) {
			  // radio button is checked
			  var gender = "others";
			}
	formData.append('gender', gender);		

			var u =localStorage.session_id;
			formData.append('email', u); //alert(u);
			
/* ============================== */

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log(response);
    });
	alert("Your request for doctor appointment is submitted.");
	$(location).attr('href', 'doctor-appointment.html');
	
}