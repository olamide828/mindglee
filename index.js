


console.log("Hello World");

const form = document.querySelector("#form");
const Email = document.querySelector("#email");
const Valid = document.querySelector("#valid");
const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



form.addEventListener("submit", function () {
	// body...

	if (Email.value.trim()=== "") {
		return;
		alert("email cannot be empty")
	}

	if (email.test(Email.value.trim())) {
		alert("submitted");
	} else {
		console.log("invalid email");
	};
});


function showSidebar () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}

function closeSidebar () {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
}





















// console.log("Hello world");
// const form = document.querySelector("#form");
// const btn = document.querySelector("#btn");
// const Email = document.querySelector("#email");
// const emailRegex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


// form.addEventListener("click", function(e) {
//     e.preventDefault();

//     if (Email.value.trim() === "") {
//         return;
//     } else if (emailRegex(Email.value.trim())) {
//         alert("hello")
//     }

// });
