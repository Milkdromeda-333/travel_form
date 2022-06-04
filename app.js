const myForm = document.myForm;

document.addEventListener("submit", function (e) {
    e.preventDefault();
    const firstName = myForm.firstName.value;
    const lastName = myForm.lastName.value;
    const age = myForm.age.value;
    let genderOptions = myForm.gender;
    let gender;
    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            gender = genderOptions[i].value;
        }
    }


});
