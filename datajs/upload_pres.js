function save_image() {
	const url = BaseURL + 'process.php'; //alert(url);
	const form = document.querySelector('form');
	
	
	
	const files = document.querySelector('[type=file]').files;
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
        let file = files[i];

        formData.append('files[]', file);
    }

/*add form data*/

	var comment=$("#comment").val();
	formData.append('comment', comment);

			var u =localStorage.session_id;
			formData.append('email', u); //alert(u);
			
/* ============================== */

    fetch(url, {
        method: 'POST',
        body: formData
    }).then(response => {
        console.log(response);
    });
	alert("Thank you for uploading the prescription.");
	$(location).attr('href', 'welcome.html');
	
}