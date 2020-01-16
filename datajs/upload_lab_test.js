function save_lab() {
	const url = BaseURL + 'save_lab.php'; //alert(url);
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
	alert("Your request for lab test is submitted.");
	$(location).attr('href', 'welcome.html');
	
}