var link = document.querySelector(".feedback_btn");

var popup = document.querySelector(".feedback");

var close = popup.querySelector(".feedback_form_close");

var form = popup.querySelector(".feedback_form");

var username = popup.querySelector("[name=feedback_name]");
var usermail = popup.querySelector("[name=feedback_email]");
var message = popup.querySelector("[name=feedback_text]");

var storageName = localStorage.getItem("username");
var storageMail = localStorage.getItem("usermail");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("feedback_show");

	if (storageName || storageMail) {
		username.value = storageName;
		usermail.value = storageMail;
	} 
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("feedback_show");
	popup.classList.remove("feedback_error");
});

form.addEventListener("submit", function(event) {
	if (!username.value || !usermail.value || !message.value) {
		event.preventDefault();
		popup.classList.remove("feedback_error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("feedback_error");
	} else {
		localStorage.setItem("username", username.value);
		localStorage.setItem("usermail", usermail.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if(popup.classList.contains("feedback_show")) {
			popup.classList.remove("feedback_show");
			popup.classList.remove("feedback_error");
		}
	}
});