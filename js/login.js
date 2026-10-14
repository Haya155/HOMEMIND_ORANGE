// Login/signup view transitions and conditional form fields only.
// Authentication, account creation, and role-based routing must be handled by the .NET backend.
var loginView = document.querySelector(".login-view");
var signupView = document.querySelector(".signup-view");
var urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("signup") === "true") {
    loginView.classList.remove("active-view");
    signupView.classList.add("active-view");
}

var accountType = document.getElementById("accountType");
var technicianFields = document.getElementById("technicianFields");
if (accountType && technicianFields) {
    var techInputs = technicianFields.querySelectorAll("select, input");
    function updateTechnicianFields() {
        var isTechnician = accountType.value === "technician";
        technicianFields.hidden = !isTechnician;
        techInputs.forEach(function (field) { field.required = isTechnician; });
    }
    var typeFromLink = urlParams.get("type");
    if (["technician", "company", "individual"].includes(typeFromLink)) {
        accountType.value = typeFromLink;
    }
    accountType.addEventListener("change", updateTechnicianFields);
    updateTechnicianFields();
}

document.getElementById("showSignup").addEventListener("click", function () {
    loginView.classList.remove("active-view");
    loginView.classList.add("exit-left");
    signupView.classList.add("active-view");
    signupView.classList.remove("exit-left");
});

document.getElementById("showLogin").addEventListener("click", function () {
    signupView.classList.remove("active-view");
    signupView.classList.add("exit-left");
    loginView.classList.add("active-view");
    loginView.classList.remove("exit-left");
});
