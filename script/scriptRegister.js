document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu img');
    const menu = document.querySelector('.hamburger-menu ul');
    
    let menuVisible = false;
    
    hamburger.addEventListener('click', function() {
        menuVisible = !menuVisible;
        menu.style.display = menuVisible ? 'block' : 'none';
    });

    hamburger.addEventListener('mouseover', function() {
        menuVisible = true;
        menu.style.display = 'block';
    });

    hamburger.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!menu.matches(':hover') && !hamburger.matches(':hover')) {
                menuVisible = false;
                menu.style.display = 'none';
            }
        }, 500);
    });

    menu.addEventListener('mouseover', function() {
        menuVisible = true;
        menu.style.display = 'block';
    });

    menu.addEventListener('mouseout', function() {
        setTimeout(function() {
            if (!hamburger.matches(':hover') && !menu.matches(':hover')) {
                menuVisible = false;
                menu.style.display = 'none';
            }
        }, 500);
    });
});

function validation(e) {
    e.preventDefault();
    
    var nameInput = document.getElementById("name").value.trim();
    var emailInput = document.getElementById("email").value.trim();
    var dobInput = document.getElementById("dob").value;
    var addressInput = document.getElementById("address").value.trim();
    var maleInput = document.getElementById("male").checked;
    var femaleInput = document.getElementById("female").checked;

    var dateNow = new Date();
    var dateInput = new Date(dobInput);

    var emailArr = emailInput.split('@');
    var nameRegex = /^[A-Za-z\s]+$/;

    var errorLine = document.getElementById("error-line");
    var errorName = document.getElementById("error-name");
    var errorEmail = document.getElementById("error-email");
    var errorAddress = document.getElementById("error-address");
    var errorGender = document.getElementById("error-gender");
    var errorDob = document.getElementById("error-dob");

    // Reset error messages
    errorLine.innerHTML = "";
    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorAddress.innerHTML = "";
    errorGender.innerHTML = "";
    errorDob.innerHTML = "";

    var isValid = true;

    if (nameInput === "") {
        errorName.innerHTML = "Name must not be empty!";
        isValid = false;
    } else if (!nameRegex.test(nameInput)) {
        errorName.innerHTML = "Name must contain only letters!";
        isValid = false;
    }

    if (emailInput === "") {
        errorEmail.innerHTML = "Email must not be empty!";
        isValid = false;
    } else if (emailArr.length !== 2 || emailArr[1] !== "binus.ac.id") {
        errorEmail.innerHTML = "Email must have domain 'binus.ac.id'";
        isValid = false;
    }

    if (addressInput === "") {
        errorAddress.innerHTML = "Address must not be empty!";
        isValid = false;
    }

    if (!maleInput && !femaleInput) {
        errorGender.innerHTML = "Gender must be selected!";
        isValid = false;
    }

    if (dobInput === "") {
        errorDob.innerHTML = "Date of birth must not be empty!";
        isValid = false;
    } else if (dateInput > dateNow) {
        errorDob.innerHTML = "Invalid date of birth!";
        isValid = false;
    }

    if (isValid) {
        alert("Successful Registration");
    }
}