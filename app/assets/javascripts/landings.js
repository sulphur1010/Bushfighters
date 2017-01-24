function submitAjax(){
alert("I am here!");
var email = $('#email').val()
result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	if (!result){
		alert("Please Enter a Valid Email");
	}
	else if(!("#name").val()){
		alert("Please Enter a Valid Name");

	}
	else if(!("#subject").val()){
		alert("Please Enter Subject");
	}
	else if(!("#message").val()){
			alert("Please Enter Message");
		}
	}
	else{
		finalSubmit();
	}
}

function finalSubmit(){
	var contact = $("#main-contact-form");
	$.ajax({
		 url: '/contact',
		 type: 'POST',
		 data: contact.serialize(),
		 success: function(data){
		 	if (data=="true")
		 	{
             alert("Thank you! We will get back to you shortly");
           }else if(data=="false"){
		 		// shakeModal(false, "Could not complete the request");
		 		 alert('Could not complete the request');
		 	}
		 }
		 error: function(jqXHR, textStatus, errorThrown) {
             // shakeModal(false, "Couldn't complete your request, kindly try again");
              alert("Couldn't complete your request, kindly try again");
           }

	});
}